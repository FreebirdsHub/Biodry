'use server';

import { LeadSchema, type LeadInput } from '@/types/lead';

export async function submitLead(data: unknown) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // 1. Trigger analytics placeholder for submission intent
  console.log('[Analytics Hook] lead_submission_started');

  // 2. Validate using Zod schema
  const result = LeadSchema.safeParse(data);

  if (!result.success) {
    const errorMap = result.error.flatten().fieldErrors;
    console.error('[Analytics Hook] lead_submission_failed', {
      errors: errorMap,
    });
    return {
      success: false,
      message: 'Validation failed. Please check your form fields.',
      errors: errorMap,
    };
  }

  const lead = result.data;

  // 3. Analytics logging of successful validation
  console.log('[Analytics Hook] lead_submission_validated', {
    propertyType: lead.propertyType,
    issueType: lead.issueType,
    severity: lead.severity,
    city: lead.location.city,
    hasPhotos: !!lead.photoMeta && lead.photoMeta.length > 0,
  });

  // 4. Log lead submission details safely (No writing to leads.json as requested)
  console.log('[Server Action] Lead Submission Received:', {
    name: lead.contactInfo.name,
    email: lead.contactInfo.email,
    phone: lead.contactInfo.phone,
    pincode: lead.location.pincode,
  });

  // 5. Final success trigger for analytics
  console.log('[Analytics Hook] lead_submission_success');

  return {
    success: true,
    message:
      'Thank you! Your moisture assessment data has been registered. A Biodry Swiss-certified engineering consultant will contact you shortly.',
  };
}
