import React, { useState, useEffect } from 'react';
import { LOCATIONS } from '../../data/locations';
import { SERVICES, type ServiceItem } from '../../data/services';
import { RITUALS, type RitualPackage } from '../../data/rituals';
import { PROFESSIONALS } from '../../data/team';
import { submitBookingToGoogleSheets, type BookingPayload } from '../../services/googleSheets';
import {
  X, CheckCircle2, ChevronRight, ChevronLeft, Sparkles, Check, RefreshCw, FileText, ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingWizardProps {
  isOpen: boolean;
  onClose: () => void;
  initialBranchId?: string;
  initialServiceId?: string;
  initialStylistId?: string;
}

export const BookingWizard: React.FC<BookingWizardProps> = ({
  isOpen,
  onClose,
  initialBranchId,
  initialServiceId,
  initialStylistId
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedBranchId, setSelectedBranchId] = useState<string>(initialBranchId || 'jp-nagar');
  const [selectedCategory, setSelectedCategory] = useState<string>('hair');
  const [selectedService, setSelectedService] = useState<ServiceItem | RitualPackage | null>(null);
  const [selectedStylistId, setSelectedStylistId] = useState<string>(initialStylistId || 'any');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  
  // Form fields
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerNotes, setCustomerNotes] = useState<string>('');

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingConfirmation, setBookingConfirmation] = useState<BookingPayload | null>(null);
  const [showPayloadDetails, setShowPayloadDetails] = useState<boolean>(false);

  // Set default initial parameters when opened
  useEffect(() => {
    if (isOpen) {
      if (initialBranchId) setSelectedBranchId(initialBranchId);
      if (initialServiceId) {
        const serv = SERVICES.find((s) => s.id === initialServiceId);
        if (serv) {
          setSelectedService(serv);
          setSelectedCategory(serv.category);
        } else {
          const rit = RITUALS.find((r) => r.id === initialServiceId);
          if (rit) {
            setSelectedService(rit);
            setSelectedCategory('rituals');
          }
        }
      } else if (!selectedService) {
        setSelectedService(SERVICES[0]);
      }
      if (initialStylistId) setSelectedStylistId(initialStylistId);

      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setSelectedDate(tomorrow.toISOString().split('T')[0]);
      setSelectedTimeSlot('11:00 AM');
    }
  }, [isOpen, initialBranchId, initialServiceId, initialStylistId]);

  if (!isOpen) return null;

  const branchObj = LOCATIONS.find((l) => l.id === selectedBranchId) || LOCATIONS[0];
  const availableServices = SERVICES.filter((s) => s.branches.includes(selectedBranchId));
  const availableRituals = RITUALS.filter((r) => r.availableBranches.includes(selectedBranchId));
  const availableStylists = PROFESSIONALS.filter((p) => p.branchId === selectedBranchId);
  const selectedStylistObj = PROFESSIONALS.find((p) => p.id === selectedStylistId);

  const dateOptions = Array.from({ length: 14 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      dateStr: d.toISOString().split('T')[0],
      dayName: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' }),
      dayNumber: d.getDate(),
      monthName: d.toLocaleDateString('en-US', { month: 'short' })
    };
  });

  const timeSlots = [
    '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM',
    '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  const handleConfirmBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert('Please provide your name and phone number to complete the appointment request.');
      return;
    }

    setIsSubmitting(true);
    const bookingId = `EXCELLENT-${Math.floor(1000 + Math.random() * 9000)}`;
    const payload: BookingPayload = {
      bookingId,
      timestamp: new Date().toISOString(),
      appointmentDate: selectedDate,
      appointmentTime: selectedTimeSlot,
      branch: branchObj.name,
      branchId: selectedBranchId,
      serviceCategory: selectedCategory,
      serviceName: selectedService ? selectedService.name : 'Custom Service',
      servicePrice: selectedService ? selectedService.price : 'TBD',
      professionalName: selectedStylistId === 'any' ? 'Any Available Master Stylist' : selectedStylistObj ? selectedStylistObj.name : 'Master Stylist',
      customerName,
      customerPhone,
      customerEmail: customerEmail || 'N/A',
      notes: customerNotes || 'None',
      status: 'New'
    };

    const res = await submitBookingToGoogleSheets(payload);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setBookingConfirmation(res.payload);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#C4A77D', '#5A604D', '#1C1B1A', '#FAF8F5']
      });
    } catch (e) {
      console.warn('Confetti effect trigger', e);
    }
  };

  const resetWizard = () => {
    setIsSubmitted(false);
    setBookingConfirmation(null);
    setCurrentStep(1);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="bg-[#FAF8F5] w-full max-w-3xl rounded-sm shadow-2xl overflow-hidden border border-[#1C1B1A]/10 max-h-[92vh] flex flex-col">
        
        {/* HEADER BAR */}
        <div className="p-4 sm:p-6 border-b border-[#1C1B1A]/8 bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold tracking-widest text-[#1C1B1A]">EXCELLENT</span>
            <span className="text-xs uppercase tracking-widest text-[#8E867C] hidden sm:inline">• Appointment Booking</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#5C564E] hover:text-[#1C1B1A] hover:bg-[#F4EFEA] rounded-xs transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* STEP PROGRESS BAR */}
        {!isSubmitted && (
          <div className="bg-[#F4EFEA] px-4 py-3 border-b border-[#1C1B1A]/6 flex items-center justify-between text-[11px] font-medium text-[#5C564E] overflow-x-auto">
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${currentStep >= 1 ? 'bg-[#1C1B1A] text-white' : 'bg-[#D8D0C5]'}`}>1</span>
              <span>Location</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-[#8E867C] shrink-0" />

            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${currentStep >= 2 ? 'bg-[#1C1B1A] text-white' : 'bg-[#D8D0C5]'}`}>2</span>
              <span>Service</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-[#8E867C] shrink-0" />

            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${currentStep >= 3 ? 'bg-[#1C1B1A] text-white' : 'bg-[#D8D0C5]'}`}>3</span>
              <span>Stylist</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-[#8E867C] shrink-0" />

            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${currentStep >= 4 ? 'bg-[#1C1B1A] text-white' : 'bg-[#D8D0C5]'}`}>4</span>
              <span>Date & Time</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-[#8E867C] shrink-0" />

            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${currentStep >= 5 ? 'bg-[#1C1B1A] text-white' : 'bg-[#D8D0C5]'}`}>5</span>
              <span>Confirm</span>
            </div>
          </div>
        )}

        {/* WIZARD CONTENT BODY */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          {/* CONFIRMATION / SUCCESS VIEW */}
          {isSubmitted && bookingConfirmation ? (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 bg-[#C4A77D]/20 text-[#1C1B1A] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-[#5A604D]" />
              </div>

              <div className="space-y-2">
                <span className="tag-label">Booking Reference: {bookingConfirmation.bookingId}</span>
                <h2 className="font-serif text-3xl font-semibold text-[#1C1B1A]">
                  Appointment Request Received
                </h2>
                <p className="text-sm text-[#5C564E] max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <span className="font-semibold text-[#1C1B1A]">{bookingConfirmation.customerName}</span>. Our reception team will review slot availability and contact you shortly at <span className="font-semibold text-[#1C1B1A]">{bookingConfirmation.customerPhone}</span>.
                </p>
              </div>

              {/* APPOINTMENT DETAILS SUMMARY CARD */}
              <div className="bg-white p-6 border border-[#1C1B1A]/8 text-left space-y-3 rounded-sm max-w-md mx-auto">
                <h3 className="font-serif text-lg font-semibold text-[#1C1B1A] border-b border-[#1C1B1A]/6 pb-2">
                  Appointment Summary
                </h3>
                <div className="space-y-2 text-xs text-[#5C564E]">
                  <div className="flex justify-between">
                    <span className="text-[#8E867C]">Sanctuary:</span>
                    <span className="font-semibold text-[#1C1B1A]">{bookingConfirmation.branch}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8E867C]">Service Ritual:</span>
                    <span className="font-semibold text-[#1C1B1A]">{bookingConfirmation.serviceName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8E867C]">Professional:</span>
                    <span className="font-semibold text-[#1C1B1A]">{bookingConfirmation.professionalName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8E867C]">Date & Time:</span>
                    <span className="font-semibold text-[#1C1B1A]">{bookingConfirmation.appointmentDate} at {bookingConfirmation.appointmentTime}</span>
                  </div>
                  <div className="flex justify-between border-t border-[#1C1B1A]/6 pt-2">
                    <span className="text-[#8E867C]">Status:</span>
                    <span className="font-semibold text-[#5A604D] uppercase tracking-wider">{bookingConfirmation.status}</span>
                  </div>
                </div>
              </div>

              {/* GOOGLE SHEETS LIVE PAYLOAD PREVIEW ACCORDION */}
              <div className="max-w-md mx-auto text-left">
                <button
                  type="button"
                  onClick={() => setShowPayloadDetails(!showPayloadDetails)}
                  className="text-xs text-[#8E867C] hover:text-[#1C1B1A] flex items-center justify-center gap-1 mx-auto underline underline-offset-2"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{showPayloadDetails ? 'Hide' : 'Inspect'} Google Sheets Webhook Payload</span>
                </button>
                {showPayloadDetails && (
                  <div className="mt-3 bg-[#1C1B1A] text-[#FAF8F5] p-4 rounded-xs text-[11px] font-mono overflow-x-auto">
                    <p className="text-[#C4A77D] font-bold mb-1">// Google Sheets JSON Payload</p>
                    <pre>{JSON.stringify(bookingConfirmation, null, 2)}</pre>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <button
                  onClick={resetWizard}
                  className="btn-secondary text-xs py-3 px-6"
                >
                  BOOK ANOTHER APPOINTMENT
                </button>
                <button
                  onClick={onClose}
                  className="btn-primary text-xs py-3 px-6"
                >
                  RETURN TO HOMEPAGE
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* STEP 1: CHOOSE LOCATION */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="tag-label">Step 01</span>
                    <h3 className="font-serif text-2xl font-semibold text-[#1C1B1A]">Select Bengaluru Sanctuary</h3>
                    <p className="text-xs text-[#5C564E]">Choose the physical branch closest to you.</p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 pt-2">
                    {LOCATIONS.map((loc) => (
                      <div
                        key={loc.id}
                        onClick={() => setSelectedBranchId(loc.id)}
                        className={`p-5 rounded-sm border cursor-pointer transition-all flex items-center justify-between ${
                          selectedBranchId === loc.id
                            ? 'bg-[#F4EFEA] border-[#1C1B1A] shadow-xs'
                            : 'bg-white border-[#1C1B1A]/8 hover:border-[#1C1B1A]/30'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={loc.image}
                            alt={loc.name}
                            className="w-16 h-16 rounded-xs object-cover"
                          />
                          <div className="space-y-0.5">
                            <h4 className="font-serif font-semibold text-[#1C1B1A] text-lg">{loc.name}</h4>
                            <p className="text-xs text-[#5C564E]">{loc.address}</p>
                            <p className="text-[10px] text-[#8E867C]">{loc.hours.weekdays}</p>
                          </div>
                        </div>
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${selectedBranchId === loc.id ? 'bg-[#1C1B1A] border-[#1C1B1A] text-white' : 'border-[#1C1B1A]/20'}`}>
                          {selectedBranchId === loc.id && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: CHOOSE SERVICE / RITUAL */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="tag-label">Step 02</span>
                    <h3 className="font-serif text-2xl font-semibold text-[#1C1B1A]">Select Service or Ritual</h3>
                    <p className="text-xs text-[#5C564E]">Showing available treatments at {branchObj.shortName}.</p>
                  </div>

                  {/* CATEGORY TABS */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {[
                      { id: 'hair', name: 'Hair' },
                      { id: 'grooming', name: 'Grooming' },
                      { id: 'skin', name: 'Facial & Skin' },
                      { id: 'nails', name: 'Nails' },
                      { id: 'beauty', name: 'Beauty' },
                      { id: 'rituals', name: 'Curated Rituals' }
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`text-xs uppercase tracking-wider px-3.5 py-2 rounded-xs font-semibold whitespace-nowrap transition-all ${
                          selectedCategory === cat.id
                            ? 'bg-[#1C1B1A] text-[#FAF8F5]'
                            : 'bg-white text-[#5C564E] border border-[#1C1B1A]/8'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>

                  {/* SERVICES ITEMS GRID */}
                  <div className="grid grid-cols-1 gap-3 max-h-72 overflow-y-auto pr-1">
                    {selectedCategory === 'rituals' ? (
                      availableRituals.map((r) => (
                        <div
                          key={r.id}
                          onClick={() => setSelectedService(r)}
                          className={`p-4 rounded-sm border cursor-pointer transition-all flex items-center justify-between ${
                            selectedService?.id === r.id
                              ? 'bg-[#F4EFEA] border-[#1C1B1A]'
                              : 'bg-white border-[#1C1B1A]/8 hover:border-[#1C1B1A]/30'
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-serif font-semibold text-[#1C1B1A] text-base">{r.name}</span>
                              <span className="text-[10px] bg-[#C4A77D]/20 text-[#1C1B1A] px-2 py-0.5 font-bold uppercase">Package</span>
                            </div>
                            <p className="text-xs text-[#5C564E]">{r.tagline}</p>
                            <p className="text-xs font-bold text-[#1C1B1A] mt-1">{r.price} • {r.duration}</p>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedService?.id === r.id ? 'bg-[#1C1B1A] border-[#1C1B1A] text-white' : 'border-[#1C1B1A]/20'}`}>
                            {selectedService?.id === r.id && <Check className="w-3 h-3" />}
                          </div>
                        </div>
                      ))
                    ) : (
                      availableServices
                        .filter((s) => s.category === selectedCategory)
                        .map((s) => (
                          <div
                            key={s.id}
                            onClick={() => setSelectedService(s)}
                            className={`p-4 rounded-sm border cursor-pointer transition-all flex items-center justify-between ${
                              selectedService?.id === s.id
                                ? 'bg-[#F4EFEA] border-[#1C1B1A]'
                                : 'bg-white border-[#1C1B1A]/8 hover:border-[#1C1B1A]/30'
                            }`}
                          >
                            <div>
                              <h4 className="font-serif font-semibold text-[#1C1B1A] text-base">{s.name}</h4>
                              <p className="text-xs text-[#5C564E]">{s.shortDesc}</p>
                              <p className="text-xs font-bold text-[#1C1B1A] mt-1">{s.price} • {s.duration}</p>
                            </div>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedService?.id === s.id ? 'bg-[#1C1B1A] border-[#1C1B1A] text-white' : 'border-[#1C1B1A]/20'}`}>
                              {selectedService?.id === s.id && <Check className="w-3 h-3" />}
                            </div>
                          </div>
                        ))
                    )}
                  </div>
                </div>
              )}

              {/* STEP 3: CHOOSE PROFESSIONAL */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="tag-label">Step 03</span>
                    <h3 className="font-serif text-2xl font-semibold text-[#1C1B1A]">Choose Your Professional</h3>
                    <p className="text-xs text-[#5C564E]">Select a master stylist or leave as "Any Available".</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* ANY AVAILABLE OPTION */}
                    <div
                      onClick={() => setSelectedStylistId('any')}
                      className={`p-5 rounded-sm border cursor-pointer transition-all flex items-center gap-4 ${
                        selectedStylistId === 'any'
                          ? 'bg-[#F4EFEA] border-[#1C1B1A]'
                          : 'bg-white border-[#1C1B1A]/8 hover:border-[#1C1B1A]/30'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#1C1B1A] text-white flex items-center justify-center shrink-0">
                        <Sparkles className="w-6 h-6 text-[#C4A77D]" />
                      </div>
                      <div>
                        <h4 className="font-serif font-semibold text-[#1C1B1A]">Any Available Professional</h4>
                        <p className="text-xs text-[#8E867C]">Fastest slot assignment by reception.</p>
                      </div>
                    </div>

                    {/* SPECIFIC STYLISTS AT THIS BRANCH */}
                    {availableStylists.map((st) => (
                      <div
                        key={st.id}
                        onClick={() => setSelectedStylistId(st.id)}
                        className={`p-5 rounded-sm border cursor-pointer transition-all flex items-center gap-4 ${
                          selectedStylistId === st.id
                            ? 'bg-[#F4EFEA] border-[#1C1B1A]'
                            : 'bg-white border-[#1C1B1A]/8 hover:border-[#1C1B1A]/30'
                        }`}
                      >
                        <img
                          src={st.avatar}
                          alt={st.name}
                          className={`w-12 h-12 rounded-full object-cover ${st.avatarPosition || 'object-top'} border border-[#C4A77D]/40 shrink-0`}
                        />
                        <div>
                          <h4 className="font-serif font-semibold text-[#1C1B1A]">{st.name}</h4>
                          <p className="text-xs text-[#C4A77D] font-medium">{st.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: DATE & TIME */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="tag-label">Step 04</span>
                    <h3 className="font-serif text-2xl font-semibold text-[#1C1B1A]">Select Date & Time Slot</h3>
                    <p className="text-xs text-[#5C564E]">Pick a date and convenient time slot.</p>
                  </div>

                  {/* DATE PICKER SCROLL */}
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest text-[#8E867C] font-semibold">Appointment Date:</p>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {dateOptions.map((d) => (
                        <button
                          key={d.dateStr}
                          type="button"
                          onClick={() => setSelectedDate(d.dateStr)}
                          className={`p-3 rounded-sm border text-center min-w-[70px] shrink-0 transition-all ${
                            selectedDate === d.dateStr
                              ? 'bg-[#1C1B1A] text-white border-[#1C1B1A]'
                              : 'bg-white text-[#1C1B1A] border-[#1C1B1A]/8 hover:border-[#1C1B1A]/30'
                          }`}
                        >
                          <span className="text-[10px] uppercase block opacity-80">{d.dayName}</span>
                          <span className="font-serif text-xl font-bold block">{d.dayNumber}</span>
                          <span className="text-[10px] block opacity-80">{d.monthName}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* TIME SLOTS */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs uppercase tracking-widest text-[#8E867C] font-semibold">Available Time Slots:</p>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 max-h-48 overflow-y-auto pr-1">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTimeSlot(t)}
                          className={`py-2 px-3 text-xs font-semibold rounded-xs border transition-all ${
                            selectedTimeSlot === t
                              ? 'bg-[#1C1B1A] text-white border-[#1C1B1A]'
                              : 'bg-white text-[#5C564E] border-[#1C1B1A]/8 hover:border-[#1C1B1A]/30'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: CUSTOMER DETAILS & CONFIRM */}
              {currentStep === 5 && (
                <form onSubmit={handleConfirmBooking} className="space-y-6">
                  <div className="space-y-1">
                    <span className="tag-label">Step 05</span>
                    <h3 className="font-serif text-2xl font-semibold text-[#1C1B1A]">Customer Details</h3>
                    <p className="text-xs text-[#5C564E]">Please provide your contact information to finalize reservation.</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#8E867C] font-semibold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Vikram Malhotra"
                        className="w-full bg-white border border-[#1C1B1A]/12 px-4 py-3 text-sm text-[#1C1B1A] focus:outline-hidden focus:border-[#1C1B1A] rounded-xs"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-[#8E867C] font-semibold mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full bg-white border border-[#1C1B1A]/12 px-4 py-3 text-sm text-[#1C1B1A] focus:outline-hidden focus:border-[#1C1B1A] rounded-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-[#8E867C] font-semibold mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          placeholder="vikram@example.com"
                          className="w-full bg-white border border-[#1C1B1A]/12 px-4 py-3 text-sm text-[#1C1B1A] focus:outline-hidden focus:border-[#1C1B1A] rounded-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#8E867C] font-semibold mb-1">
                        Special Requests / Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={customerNotes}
                        onChange={(e) => setCustomerNotes(e.target.value)}
                        placeholder="Any allergies, scalp sensitivities, or specific styling preferences..."
                        className="w-full bg-white border border-[#1C1B1A]/12 px-4 py-3 text-sm text-[#1C1B1A] focus:outline-hidden focus:border-[#1C1B1A] rounded-xs"
                      />
                    </div>
                  </div>

                  {/* SUMMARY REVIEW RECAP */}
                  <div className="bg-[#F4EFEA] p-4 rounded-xs border border-[#1C1B1A]/8 space-y-2 text-xs">
                    <p className="font-semibold text-[#1C1B1A]">Reservation Preview:</p>
                    <p>• <span className="font-medium text-[#1C1B1A]">{branchObj.name}</span></p>
                    <p>• Service: <span className="font-medium text-[#1C1B1A]">{selectedService?.name}</span> ({selectedService?.price})</p>
                    <p>• Professional: <span className="font-medium text-[#1C1B1A]">{selectedStylistId === 'any' ? 'Any Available Professional' : selectedStylistObj?.name}</span></p>
                    <p>• Slot: <span className="font-medium text-[#1C1B1A]">{selectedDate} at {selectedTimeSlot}</span></p>
                  </div>
                </form>
              )}
            </>
          )}

        </div>

        {/* FOOTER WIZARD CONTROLS */}
        {!isSubmitted && (
          <div className="p-4 sm:p-6 border-t border-[#1C1B1A]/8 bg-white flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="btn-secondary py-3 px-5 text-xs flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>BACK</span>
              </button>
            ) : (
              <div />
            )}

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={() => {
                  if (currentStep === 1 && !selectedBranchId) {
                    alert('Please select a Sanctuary location.');
                    return;
                  }
                  if (currentStep === 2 && !selectedService) {
                    alert('Please select a Service or Ritual.');
                    return;
                  }
                  if (currentStep === 3 && !selectedStylistId) {
                    alert('Please select a Professional.');
                    return;
                  }
                  if (currentStep === 4 && (!selectedDate || !selectedTimeSlot)) {
                    alert('Please select both a Date and a Time Slot.');
                    return;
                  }
                  setCurrentStep(currentStep + 1);
                }}
                className="btn-primary py-3 px-6 text-xs flex items-center gap-1.5"
              >
                <span>CONTINUE</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleConfirmBooking}
                disabled={isSubmitting}
                className="btn-primary py-3 px-8 text-xs tracking-widest flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-[#C4A77D]" />
                    <span> TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <span>CONFIRM APPOINTMENT</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
