'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Home,
  Building,
  Activity,
  AlertTriangle,
  UploadCloud,
  MapPin,
  User,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Loader2,
  FileText,
  Trash2,
} from 'lucide-react';

import { LeadSchema, type LeadInput } from '@/types/lead';
import { submitLead } from '@/actions/submit-lead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const STEPS = [
  { id: 'property', label: 'Property' },
  { id: 'issue', label: 'Issue' },
  { id: 'severity', label: 'Severity' },
  { id: 'location', label: 'Location' },
  { id: 'contact', label: 'Contact' },
];

export function AssessmentFunnel() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmittingAction, setIsSubmittingAction] = useState(false);
  const [successData, setSuccessData] = useState<{ message: string } | null>(null);
  const [filesMock, setFilesMock] = useState<{ name: string; size: number; type: string }[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(LeadSchema),
    mode: 'onTouched',
    defaultValues: {
      propertyType: undefined,
      issueType: undefined,
      severity: undefined,
      location: { city: '', pincode: '' },
      contactInfo: { name: '', email: '', phone: '', message: '' },
      photoMeta: [],
    },
  });

  const propertyType = watch('propertyType');
  const issueType = watch('issueType');
  const severity = watch('severity');

  // Multi-step navigation logic with validation checks
  const handleNext = async () => {
    let isValid = false;

    if (currentStep === 0) {
      isValid = await trigger('propertyType');
    } else if (currentStep === 1) {
      isValid = await trigger('issueType');
    } else if (currentStep === 2) {
      isValid = await trigger('severity');
    } else if (currentStep === 3) {
      isValid = await trigger(['location.city', 'location.pincode']);
    }

    if (isValid) {
      // Analytics hook: Step completed
      console.log(`[Analytics Hook] funnel_step_completed`, {
        stepName: STEPS[currentStep].id,
      });
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // Mock Photo Upload triggers
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((f) => ({
        name: f.name,
        size: f.size,
        type: f.type,
      }));
      const updatedMeta = [...filesMock, ...filesArray];
      setFilesMock(updatedMeta);
      setValue('photoMeta', updatedMeta);
      console.log('[Analytics Hook] lead_photo_added', { count: filesArray.length });
    }
  };

  const handleRemoveFile = (index: number) => {
    const updated = filesMock.filter((_, idx) => idx !== index);
    setFilesMock(updated);
    setValue('photoMeta', updated);
  };

  const onSubmit = async (data: LeadInput) => {
    setIsSubmittingAction(true);
    try {
      const res = await submitLead(data);
      if (res.success) {
        setSuccessData({ message: res.message });
      } else {
        alert(res.message || 'Submission failed.');
      }
    } catch (err) {
      console.error(err);
      alert('An unexpected error occurred.');
    } finally {
      setIsSubmittingAction(false);
    }
  };

  // Slide transitions for step progression
  const slideVariants: Variants = {
    initial: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    active: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' as const } },
    exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0, transition: { duration: 0.2, ease: 'easeIn' as const } }),
  };

  if (successData) {
    return (
      <div className="bg-[var(--color-stone-100)] dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/60 p-10 rounded-xs shadow-md max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
        <div className="p-4 bg-brand-green/10 rounded-full text-brand-green">
          <CheckCircle className="w-16 h-16" />
        </div>
        <h3 className="text-2xl font-bold text-text-primary dark:text-white">
          Swiss Assessment Registered
        </h3>
        <p className="text-text-secondary dark:text-neutral-400 leading-relaxed text-sm">
          {successData.message}
        </p>

        <div className="w-full border-t border-neutral-100 dark:border-neutral-800 pt-6 text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono mb-4">
            Next Technical Steps:
          </p>
          <ul className="space-y-3.5">
            <li className="flex gap-3 text-sm text-text-secondary dark:text-neutral-400">
              <span className="font-mono text-brand-blue font-bold">1.</span>
              <span>Our engineers will review property type details & moisture patterns.</span>
            </li>
            <li className="flex gap-3 text-sm text-text-secondary dark:text-neutral-400">
              <span className="font-mono text-brand-blue font-bold">2.</span>
              <span>You will receive an invite to schedule a free physical moisture meter scan.</span>
            </li>
            <li className="flex gap-3 text-sm text-text-secondary dark:text-neutral-400">
              <span className="font-mono text-brand-blue font-bold">3.</span>
              <span>A custom damp eradication timeline and guarantee certificate proposal will be generated.</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-stone-100)] dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/60 p-8 sm:p-10 rounded-xs shadow-md max-w-2xl mx-auto">
      {/* Top step progress indicators */}
      <div className="flex justify-between items-center mb-8 border-b border-neutral-100 dark:border-neutral-900 pb-4">
        {STEPS.map((step, idx) => (
          <div key={step.id} className="flex flex-col items-center gap-1.5 flex-1 relative">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono border-2 z-10 transition-colors duration-300 ${
                idx <= currentStep
                  ? 'bg-brand-blue border-brand-blue text-white'
                  : 'bg-[var(--color-stone-100)] dark:bg-neutral-950 border-neutral-300 text-neutral-400'
              }`}
            >
              {idx < currentStep ? '✓' : idx + 1}
            </div>
            <span
              className={`text-[9px] sm:text-[10px] font-bold tracking-wider uppercase font-mono transition-colors duration-300 ${
                idx <= currentStep ? 'text-brand-blue dark:text-white' : 'text-neutral-400'
              }`}
            >
              {step.label}
            </span>
            {idx < STEPS.length - 1 && (
              <div
                className={`absolute top-3 left-[calc(50%+12px)] right-[calc(-50%+12px)] h-[2px] -z-0 transition-colors duration-300 ${
                  idx < currentStep ? 'bg-brand-blue' : 'bg-neutral-200 dark:bg-neutral-800'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="overflow-hidden min-h-[340px] flex flex-col justify-between">
        <AnimatePresence mode="wait" custom={currentStep}>
          <motion.div
            key={currentStep}
            custom={currentStep}
            variants={slideVariants}
            initial="initial"
            animate="active"
            exit="exit"
            className="flex-1 flex flex-col gap-6"
          >
            {/* Step 1: Property Type */}
            {currentStep === 0 && (
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-bold text-text-primary dark:text-white">
                    What type of property is affected?
                  </h3>
                  <p className="text-xs text-text-secondary dark:text-neutral-400 mt-1">
                    Property architecture determines the masonry thickness and damp propagation pattern.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'Villa', label: 'Villa / Bungalow', desc: 'Independent house', icon: <Home className="w-5 h-5" /> },
                    { id: 'Apartment', label: 'Apartment / Flat', desc: 'Multi-family structure', icon: <Building className="w-5 h-5" /> },
                    { id: 'Commercial', label: 'Commercial Site', desc: 'Offices or shops', icon: <Building className="w-5 h-5" /> },
                    { id: 'Heritage', label: 'Heritage Structure', desc: 'Monuments, older structures', icon: <Building className="w-5 h-5" /> },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setValue('propertyType', opt.id as LeadInput['propertyType'], { shouldValidate: true });
                        console.log('[Analytics Hook] lead_option_selected', { step: 'property', selection: opt.id });
                      }}
                      className={`p-5 rounded-xs border-2 text-left transition-all flex flex-col gap-3 group relative ${
                        propertyType === opt.id
                          ? 'border-brand-blue bg-brand-blue/5'
                          : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400'
                      }`}
                    >
                      <div className={`p-2 rounded-xs border w-fit ${
                        propertyType === opt.id ? 'border-brand-blue text-brand-blue bg-[var(--color-stone-100)]' : 'border-neutral-200 dark:border-neutral-800 text-neutral-400'
                      }`}>
                        {opt.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-primary dark:text-white group-hover:text-brand-blue transition-colors">
                          {opt.label}
                        </p>
                        <p className="text-xs text-text-secondary dark:text-neutral-500 mt-0.5">{opt.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
                {errors.propertyType && (
                  <p className="text-xs text-destructive font-semibold font-mono">{errors.propertyType.message}</p>
                )}
              </div>
            )}

            {/* Step 2: Issue Type */}
            {currentStep === 1 && (
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-bold text-text-primary dark:text-white">
                    What primary symptoms are visible?
                  </h3>
                  <p className="text-xs text-text-secondary dark:text-neutral-400 mt-1">
                    Select the symptom that best describes the wall condition.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'Rising Damp', label: 'Rising Damp', desc: 'Wall base moisture / salt stains', icon: <Activity className="w-5 h-5" /> },
                    { id: 'Condensation/Mold', label: 'Mold & Fungus', desc: 'Dark patches on corners / ceilings', icon: <Activity className="w-5 h-5" /> },
                    { id: 'Wall Cracks', label: 'Wall Cracks', desc: 'Structural plaster cracks', icon: <Activity className="w-5 h-5" /> },
                    { id: 'Peeling Paint', label: 'Peeling Paint', desc: 'Bubbling wall colors & damp plaster', icon: <Activity className="w-5 h-5" /> },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setValue('issueType', opt.id as LeadInput['issueType'], { shouldValidate: true });
                        console.log('[Analytics Hook] lead_option_selected', { step: 'issue', selection: opt.id });
                      }}
                      className={`p-5 rounded-xs border-2 text-left transition-all flex flex-col gap-3 group ${
                        issueType === opt.id
                          ? 'border-brand-blue bg-brand-blue/5'
                          : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400'
                      }`}
                    >
                      <div className={`p-2 rounded-xs border w-fit ${
                        issueType === opt.id ? 'border-brand-blue text-brand-blue bg-[var(--color-stone-100)]' : 'border-neutral-200 dark:border-neutral-800 text-neutral-400'
                      }`}>
                        {opt.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-primary dark:text-white group-hover:text-brand-blue transition-colors">
                          {opt.label}
                        </p>
                        <p className="text-xs text-text-secondary dark:text-neutral-500 mt-0.5">{opt.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
                {errors.issueType && (
                  <p className="text-xs text-destructive font-semibold font-mono">{errors.issueType.message}</p>
                )}
              </div>
            )}

            {/* Step 3: Severity & Photo Upload Prep */}
            {currentStep === 2 && (
              <div className="flex flex-col gap-5">
                <div>
                  <h3 className="text-lg font-bold text-text-primary dark:text-white">
                    What is the severity of the damage?
                  </h3>
                  <p className="text-xs text-text-secondary dark:text-neutral-400 mt-1">
                    Choose severity level, and upload photo logs if available.
                  </p>
                </div>

                <div className="flex gap-4">
                  {[
                    { id: 'Mild', label: 'Mild', desc: 'Discoloration', color: 'border-amber-200 hover:border-amber-400' },
                    { id: 'Medium', label: 'Medium', desc: 'Peeling paint', color: 'border-orange-200 hover:border-orange-400' },
                    { id: 'Severe', label: 'Severe', desc: 'Mold / crumbling', color: 'border-red-200 hover:border-red-400' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setValue('severity', opt.id as LeadInput['severity'], { shouldValidate: true });
                        console.log('[Analytics Hook] lead_option_selected', { step: 'severity', selection: opt.id });
                      }}
                      className={`flex-1 p-4 rounded-xs border-2 text-center transition-all flex flex-col gap-1.5 ${
                        severity === opt.id
                          ? 'border-brand-blue bg-brand-blue/5'
                          : 'border-neutral-200 dark:border-neutral-800'
                      }`}
                    >
                      <AlertTriangle className={`w-5 h-5 mx-auto ${
                        opt.id === 'Severe' ? 'text-red-500' : opt.id === 'Medium' ? 'text-orange-500' : 'text-amber-500'
                      }`} />
                      <p className="text-sm font-bold text-text-primary dark:text-white">{opt.label}</p>
                      <p className="text-[10px] text-text-secondary dark:text-neutral-500">{opt.desc}</p>
                    </button>
                  ))}
                </div>
                {errors.severity && (
                  <p className="text-xs text-destructive font-semibold font-mono">{errors.severity.message}</p>
                )}

                {/* Photo upload zone placeholder */}
                <div className="border border-dashed border-neutral-300 dark:border-neutral-700 p-6 rounded-xs text-center flex flex-col items-center justify-center gap-2 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors relative cursor-pointer group">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <UploadCloud className="w-8 h-8 text-neutral-400 group-hover:text-brand-blue transition-colors" />
                  <p className="text-sm font-semibold text-text-primary dark:text-white">
                    Drag wall photos or click to browse
                  </p>
                  <p className="text-[10px] text-neutral-400">
                    PNG, JPG or WEBP up to 5MB (Optional)
                  </p>
                </div>

                {/* List of mock uploaded files */}
                {filesMock.length > 0 && (
                  <div className="space-y-2 max-h-[100px] overflow-y-auto pt-2">
                    <p className="text-[10px] font-bold text-neutral-400 font-mono uppercase">Uploaded Files ({filesMock.length}):</p>
                    {filesMock.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-neutral-50 dark:bg-neutral-900 p-2 border border-neutral-200/50 dark:border-neutral-800/50 rounded-xs text-xs">
                        <div className="flex items-center gap-2 text-text-secondary dark:text-neutral-400 truncate">
                          <FileText className="w-4 h-4 shrink-0 text-brand-blue" />
                          <span className="truncate max-w-[200px]">{file.name}</span>
                          <span className="text-[10px] text-neutral-400 font-mono">({Math.round(file.size / 1024)} KB)</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(idx)}
                          className="text-neutral-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Location */}
            {currentStep === 3 && (
              <div className="flex flex-col gap-5">
                <div>
                  <h3 className="text-lg font-bold text-text-primary dark:text-white">
                    Where is the property located?
                  </h3>
                  <p className="text-xs text-text-secondary dark:text-neutral-400 mt-1">
                    Moisture analysis adapts depending on city climate and local soil moisture levels.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <label className="text-xs font-bold font-mono text-text-secondary dark:text-neutral-400 block mb-1.5 uppercase">
                      City
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-neutral-400" />
                      <Input
                        type="text"
                        placeholder="e.g. New Delhi"
                        className="pl-10 py-6 rounded-xs border-neutral-300 focus-visible:ring-brand-blue text-sm"
                        {...register('location.city')}
                      />
                    </div>
                    {errors.location?.city && (
                      <p className="text-xs text-destructive font-semibold font-mono mt-1">{errors.location.city.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <label className="text-xs font-bold font-mono text-text-secondary dark:text-neutral-400 block mb-1.5 uppercase">
                      PIN Code (6-digit)
                    </label>
                    <Input
                      type="text"
                      maxLength={6}
                      placeholder="e.g. 110001"
                      className="py-6 rounded-xs border-neutral-300 focus-visible:ring-brand-blue text-sm"
                      {...register('location.pincode')}
                    />
                    {errors.location?.pincode && (
                      <p className="text-xs text-destructive font-semibold font-mono mt-1">{errors.location.pincode.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Contact Details */}
            {currentStep === 4 && (
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-bold text-text-primary dark:text-white">
                    Who should we send the audit report to?
                  </h3>
                  <p className="text-xs text-text-secondary dark:text-neutral-400 mt-1">
                    Enter your contact details to receive validation certificate draft.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-bold font-mono text-text-secondary dark:text-neutral-400 block mb-1.5 uppercase">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-4 h-4 text-neutral-400" />
                      <Input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        className="pl-10 py-6 rounded-xs border-neutral-300 focus-visible:ring-brand-blue text-sm"
                        {...register('contactInfo.name')}
                      />
                    </div>
                    {errors.contactInfo?.name && (
                      <p className="text-xs text-destructive font-semibold font-mono mt-1">{errors.contactInfo.name.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold font-mono text-text-secondary dark:text-neutral-400 block mb-1.5 uppercase">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="e.g. rahul@example.com"
                        className="py-6 rounded-xs border-neutral-300 focus-visible:ring-brand-blue text-sm"
                        {...register('contactInfo.email')}
                      />
                      {errors.contactInfo?.email && (
                        <p className="text-xs text-destructive font-semibold font-mono mt-1">{errors.contactInfo.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-bold font-mono text-text-secondary dark:text-neutral-400 block mb-1.5 uppercase">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        maxLength={10}
                        placeholder="e.g. 9876543210"
                        className="py-6 rounded-xs border-neutral-300 focus-visible:ring-brand-blue text-sm"
                        {...register('contactInfo.phone')}
                      />
                      {errors.contactInfo?.phone && (
                        <p className="text-xs text-destructive font-semibold font-mono mt-1">{errors.contactInfo.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold font-mono text-text-secondary dark:text-neutral-400 block mb-1.5 uppercase">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      placeholder="e.g. peeling plaster in cellar, musty odor in halls..."
                      rows={3}
                      className="w-full border border-neutral-300 rounded-xs p-3 focus-visible:ring-brand-blue text-sm focus:border-brand-blue focus:outline-hidden dark:bg-neutral-950 dark:border-neutral-800"
                      {...register('contactInfo.message')}
                    />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Form controls */}
        <div className="flex justify-between items-center mt-10 pt-6 border-t border-neutral-100 dark:border-neutral-900">
          {currentStep > 0 ? (
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              disabled={isSubmittingAction}
              className="border-neutral-300 hover:bg-neutral-100 rounded-xs py-5 px-6 text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          ) : (
            <div />
          )}

          {currentStep < STEPS.length - 1 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xs py-5 px-6 text-sm"
            >
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmittingAction}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xs py-5 px-8 text-sm group/btn"
            >
              {isSubmittingAction ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Analyzing...
                </>
              ) : (
                <>
                  Submit Free Assessment
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AssessmentFunnel;
