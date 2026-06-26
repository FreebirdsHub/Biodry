import { z } from 'zod';

export const LeadSchema = z.object({
  propertyType: z.enum(['Villa', 'Apartment', 'Commercial', 'Heritage'], {
    message: 'Please select a property type.',
  }),
  issueType: z.enum(['Rising Damp', 'Condensation/Mold', 'Wall Cracks', 'Peeling Paint'], {
    message: 'Please select an issue type.',
  }),
  severity: z.enum(['Mild', 'Medium', 'Severe'], {
    message: 'Please select the severity level.',
  }),
  location: z.object({
    city: z.string().min(2, { message: 'City name is too short.' }),
    pincode: z.string().regex(/^[1-9][0-9]{5}$/, { message: 'Enter a valid 6-digit PIN code.' }),
  }),
  contactInfo: z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Enter a valid email address.' }),
    phone: z.string().regex(/^[6-9]\d{9}$/, { message: 'Enter a valid 10-digit phone number.' }),
    message: z.string().optional(),
  }),
  photoMeta: z
    .array(
      z.object({
        name: z.string(),
        size: z.number(),
        type: z.string(),
      })
    )
    .optional(),
});

export type LeadInput = z.infer<typeof LeadSchema>;
