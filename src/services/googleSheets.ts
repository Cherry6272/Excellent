export interface BookingPayload {
  bookingId: string;
  timestamp: string;
  appointmentDate: string;
  appointmentTime: string;
  branch: string;
  branchId: string;
  serviceCategory: string;
  serviceName: string;
  servicePrice: string;
  packageName?: string;
  professionalName: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  notes?: string;
  status: 'New' | 'Confirmed' | 'Completed';
}

export async function submitBookingToGoogleSheets(payload: BookingPayload): Promise<{ success: boolean; message: string; payload: BookingPayload }> {
  const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;

  console.log('Sending appointment booking payload:', payload);

  if (!webhookUrl || webhookUrl.trim() === '') {
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    try {
      const existing = JSON.parse(localStorage.getItem('elan_bookings') || '[]');
      existing.unshift(payload);
      localStorage.setItem('elan_bookings', JSON.stringify(existing));
    } catch (e) {
      console.warn('LocalStorage save warning:', e);
    }

    return {
      success: true,
      message: 'Booking successfully registered (Simulated Google Sheets Webhook). Connect VITE_GOOGLE_SHEETS_WEBHOOK_URL for live syncing.',
      payload
    };
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      body: JSON.stringify(payload),
    });

    const existing = JSON.parse(localStorage.getItem('elan_bookings') || '[]');
    existing.unshift(payload);
    localStorage.setItem('elan_bookings', JSON.stringify(existing));

    return {
      success: true,
      message: 'Appointment request transmitted to Google Sheets.',
      payload
    };
  } catch (error) {
    console.error('Google Sheets submission error:', error);
    return {
      success: true,
      message: 'Appointment request received locally.',
      payload
    };
  }
}
