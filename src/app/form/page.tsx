"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import StepProgress from "@/components/StepProgress";
import PropertyTypeSelector from "@/components/PropertyTypeSelector";
import PropertyAgeSelector from "@/components/PropertyAgeSelector";
import FormActionButtons from "@/components/FormActionButtons";
import { useRouter } from "next/navigation";
import CustomDropdown from "@/components/CustomDropdown";
import FormSection from "@/components/FormSection";
import ButtonGroup from "@/components/ButtonGroup";
import MultiSelectDropdown from "@/components/MultiSelectDropdown";

const unitTypesByPropertyType = {
  HDB: ["1-room", "2-room", "3-room", "4-room", "5-room", "Executive", "3Gen", "Jumbo"],
  Condo: ["1-bedroom", "2-bedroom", "3-bedroom", "4-bedroom", "5-bedroom"],
  Landed: ["Terrace", "Semi-Detached", "Bungalow"]
};

const TOTAL_STEPS = 5;

export default function FormPage() {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState<string | null>(null);
  const [unitType, setUnitType] = useState<string>("");
  const [propertyAge, setPropertyAge] = useState<string | null>(null);
  const router = useRouter();
  const [errors, setErrors] = useState<{ [key: number]: string }>({});

  const handlePropertyTypeChange = (value: string) => {
    setPropertyType(value);
    setUnitType("");
  };

  const getUnitTypes = () => {
    if (!propertyType) return [];
    return unitTypesByPropertyType[propertyType as keyof typeof unitTypesByPropertyType] || [];
  };

  const [renovationType, setRenovationType] = useState<string | null>(null);
  const [qualityTier, setQualityTier] = useState<string | null>(null);
  const [areasToRenovate, setAreasToRenovate] = useState<string[]>([]);

  const [floorReplacement, setFloorReplacement] = useState<string | null>(null);
  const [wallModifications, setWallModifications] = useState<string | null>(null);
  const [cabinetRemoval, setCabinetRemoval] = useState<string | null>(null);
  const [kitchenCabinet, setKitchenCabinet] = useState<string | null>(null);
  const [wardrobe, setWardrobe] = useState<string[]>([]);
  const [additionalFeature, setAdditionalFeature] = useState<string[]>([]);
  
  const [essentialServices, setEssentialServices] = useState<string[]>([]);
  const [doorReplacement, setDoorReplacement] = useState<string | null>(null);
  
  const [planName, setPlanName] = useState<string>('');

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <FormSection label="Property Type">
              <PropertyTypeSelector value={propertyType} onChange={handlePropertyTypeChange} />
            </FormSection>
            <FormSection label="Unit Type">
              <CustomDropdown
                label=""
                value={unitType}
                options={getUnitTypes()}
                onChange={setUnitType}
                placeholder="Select unit type"
              />
            </FormSection>
            <FormSection label="Property Age">
              <PropertyAgeSelector value={propertyAge} onChange={setPropertyAge} />
            </FormSection>
            {errors[1] && <div className="text-red-500 text-sm mb-2">{errors[1]}</div>}
          </>
        );
      case 2:
        return (
          <>
            <FormSection label="Renovation Type">
              <ButtonGroup
                options={renovationTypes}
                value={renovationType}
                onChange={setRenovationType}
              />
            </FormSection>
            <FormSection label="Quality Tier">
              <ButtonGroup
                options={qualityTiers}
                value={qualityTier}
                onChange={setQualityTier}
              />
            </FormSection>
            <FormSection label="Areas to Renovate">
              <MultiSelectDropdown
                label=""
                value={areasToRenovate}
                options={areasOptions}
                onChange={setAreasToRenovate}
                placeholder="Select areas to renovate"
              />
            </FormSection>
            {errors[2] && <div className="text-red-500 text-sm mb-2">{errors[2]}</div>}
          </>
        );
      case 3:
        return (
          <>
            <FormSection label="Floor Replacement">
              <ButtonGroup
                options={hackingDemolitionOptions}
                value={floorReplacement}
                onChange={setFloorReplacement}
              />
            </FormSection>
            <FormSection label="Wall Modifications">
              <ButtonGroup
                options={hackingDemolitionOptions}
                value={wallModifications}
                onChange={setWallModifications}
              />
            </FormSection>
            <FormSection label="Cabinet Removal">
              <ButtonGroup
                options={hackingDemolitionOptions}
                value={cabinetRemoval}
                onChange={setCabinetRemoval}
              />
            </FormSection>
            <FormSection label="Kitchen Cabinet">
              <ButtonGroup
                options={hackingDemolitionOptions}
                value={kitchenCabinet}
                onChange={setKitchenCabinet}
              />
            </FormSection>
            <FormSection label="Wardrobe">
              <MultiSelectDropdown
                label=""
                value={wardrobe}
                options={wardrobeOptions}
                onChange={setWardrobe}
                placeholder="Select bedroom locations"
              />
            </FormSection>
            <FormSection label="Additional Feature">
              <MultiSelectDropdown
                label=""
                value={additionalFeature}
                options={additionalFeatureOptions}
                onChange={setAdditionalFeature}
                placeholder="Select additional features"
              />
            </FormSection>
            {errors[3] && <div className="text-red-500 text-sm mb-2">{errors[3]}</div>}
          </>
        );
      case 4:
        return (
          <>
            <FormSection label="Essential Services">
              <MultiSelectDropdown
                label=""
                value={essentialServices}
                options={essentialServicesOptions}
                onChange={setEssentialServices}
                placeholder="Select essential services"
              />
            </FormSection>
            <FormSection label="Door Replacement">
              <ButtonGroup
                options={doorReplacementOptions}
                value={doorReplacement}
                onChange={setDoorReplacement}
              />
            </FormSection>
            {errors[4] && <div className="text-red-500 text-sm mb-2">{errors[4]}</div>}
          </>
        );
      case 5:
        return (
          <>
            <FormSection label="Plan Name">
              <input 
                className="w-full px-6 py-2 rounded-lg border text-base font-medium border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500" 
                placeholder="Enter your renovation plan name" 
                value={planName} 
                onChange={e => setPlanName(e.target.value)}
              />
            </FormSection>
            
            <FormSection label="Renovation Summary" required={false}>
              <div className="w-full px-6 py-4 rounded-lg border border-gray-200 bg-white space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Property</label>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{propertyType}</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{unitType}</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{propertyAge}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Renovation Type</label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{renovationType}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Quality Tier</label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{qualityTier}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Areas to Renovate</label>
                  <div className="flex flex-wrap gap-2">
                    {areasToRenovate.map((area, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{area}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Floor Replacement</label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{floorReplacement}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Wall Modifications</label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{wallModifications}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Cabinet Removal</label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{cabinetRemoval}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Kitchen Cabinet</label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{kitchenCabinet}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Wardrobe</label>
                  <div className="flex flex-wrap gap-2">
                    {wardrobe.map((item, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{item}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Additional Features</label>
                  <div className="flex flex-wrap gap-2">
                    {additionalFeature.map((feature, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{feature}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Essential Services</label>
                  <div className="flex flex-wrap gap-2">
                    {essentialServices.map((service, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{service}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Door Replacement</label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{doorReplacement || 'Not specified'}</span>
                </div>
              </div>
            </FormSection>
            {errors[5] && <div className="text-red-500 text-sm mb-2">{errors[5]}</div>}
          </>
        );
      default:
        return null;
    }
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        if (!propertyType || !unitType || !propertyAge) {
          setErrors((prev) => ({ ...prev, [step]: 'Please fill all required fields.' }));
          return false;
        }
        break;
      case 2:
        if (!renovationType || !qualityTier || areasToRenovate.length === 0) {
          setErrors((prev) => ({ ...prev, [step]: 'Please fill all required fields.' }));
          return false;
        }
        break;
      case 3:
        if (!floorReplacement || !wallModifications || !cabinetRemoval || !kitchenCabinet || wardrobe.length === 0 || additionalFeature.length === 0) {
          setErrors((prev) => ({ ...prev, [step]: 'Please fill all required fields.' }));
          return false;
        }
        break;
      case 4:
        if (essentialServices.length === 0) {
          setErrors((prev) => ({ ...prev, [step]: 'Please fill all required fields.' }));
          return false;
        }
        break;
      case 5:
        if (!planName) {
          setErrors((prev) => ({ ...prev, [step]: 'Please enter a plan name.' }));
          return false;
        }
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [step]: '' }));
    return true;
  };

  const handleBack = () => {
    if (step === 1) {
      router.push("/");
    } else {
      setStep(prev => (prev > 1 ? prev - 1 : prev));
    }
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (step === TOTAL_STEPS) {
      router.push("/maintenance");
      return;
    }
    setStep(prev => (prev < TOTAL_STEPS ? prev + 1 : prev));
  };

  return (
    <div className={"responsive-form min-h-screen bg-white flex flex-col"} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div className="flex-1 flex flex-col items-center" style={{ width: '100%', paddingTop: '84px', paddingBottom: '100px' }}> {/* Tambah padding bottom */}
        <div className="card w-full md:w-1/2 lg:w-1/2">
          <div className="bg-white rounded-lg p-4 mt-2 md:p-8 md:mt-6 w-full">
            <StepProgress step={step} total={TOTAL_STEPS} />
            {renderStep()}
            <FormActionButtons
              onBack={handleBack}
              onNext={handleNext}
              backLabel={step === 1 ? undefined : 'Back'}
              nextLabel={step === TOTAL_STEPS ? 'Finish' : 'Next'}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .responsive-form {
          min-height: 100vh;
        }
        @media (max-width: 600px) {
          .flex-1 {
            padding-top: 64px !important;
            padding-bottom: 100px !important;
          }
        }
      `}</style>
    </div>
  );
}

const renovationTypes = ["surface refresh", "partial renovation", "full renovation"];
const qualityTiers = ["economy", "standard", "premium", "luxury"];
const areasOptions = [
  "living room",
  "master bedroom", 
  "master bathroom",
  "balcony/patio",
  "dining area",
  "bedroom 2",
  "bedroom 3",
  "common bathroom",
  "study",
  "kitchen",
  "service yard/utility",
  "storage room"
];
const hackingDemolitionOptions = ["none", "partial", "major"];
const wardrobeOptions = ["master bedroom", "bedroom 2", "bedroom 3"];
const additionalFeatureOptions = ["TV Console", "Study desk"];
const essentialServicesOptions = ["Painting", "Plumbing", "Electrical"];
const doorReplacementOptions = ["0", "1", "2", "3", "4", "5+"];