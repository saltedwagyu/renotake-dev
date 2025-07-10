"use client";
import React, { useReducer } from "react";
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

// State interface
interface FormState {
  step: number;
  errors: { [key: number]: string };
  propertyType: string | null;
  unitType: string;
  propertyAge: string | null;
  renovationType: string | null;
  qualityTier: string | null;
  areasToRenovate: string[];
  floorReplacement: string | null;
  wallModifications: string | null;
  cabinetRemoval: string | null;
  kitchenCabinet: string | null;
  wardrobe: string[];
  additionalFeature: string[];
  essentialServices: string[];
  doorReplacement: string | null;
  planName: string;
}

// Initial state
const initialState: FormState = {
  step: 1,
  errors: {},
  propertyType: null,
  unitType: "",
  propertyAge: null,
  renovationType: null,
  qualityTier: null,
  areasToRenovate: [],
  floorReplacement: null,
  wallModifications: null,
  cabinetRemoval: null,
  kitchenCabinet: null,
  wardrobe: [],
  additionalFeature: [],
  essentialServices: [],
  doorReplacement: null,
  planName: "",
};

// Action types
type FormAction = 
  | { type: 'SET_STEP'; payload: number }
  | { type: 'SET_PROPERTY_TYPE'; payload: string }
  | { type: 'SET_UNIT_TYPE'; payload: string }
  | { type: 'SET_PROPERTY_AGE'; payload: string }
  | { type: 'SET_RENOVATION_TYPE'; payload: string }
  | { type: 'SET_QUALITY_TIER'; payload: string }
  | { type: 'SET_AREAS_TO_RENOVATE'; payload: string[] }
  | { type: 'SET_FLOOR_REPLACEMENT'; payload: string }
  | { type: 'SET_WALL_MODIFICATIONS'; payload: string }
  | { type: 'SET_CABINET_REMOVAL'; payload: string }
  | { type: 'SET_KITCHEN_CABINET'; payload: string }
  | { type: 'SET_WARDROBE'; payload: string[] }
  | { type: 'SET_ADDITIONAL_FEATURE'; payload: string[] }
  | { type: 'SET_ESSENTIAL_SERVICES'; payload: string[] }
  | { type: 'SET_DOOR_REPLACEMENT'; payload: string }
  | { type: 'SET_PLAN_NAME'; payload: string }
  | { type: 'SET_ERROR'; payload: { step: number; message: string } }
  | { type: 'CLEAR_ERROR'; payload: number };

// Reducer function
function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, step: action.payload };
    case 'SET_PROPERTY_TYPE':
      return { ...state, propertyType: action.payload, unitType: "" };
    case 'SET_UNIT_TYPE':
      return { ...state, unitType: action.payload };
    case 'SET_PROPERTY_AGE':
      return { ...state, propertyAge: action.payload };
    case 'SET_RENOVATION_TYPE':
      return { ...state, renovationType: action.payload };
    case 'SET_QUALITY_TIER':
      return { ...state, qualityTier: action.payload };
    case 'SET_AREAS_TO_RENOVATE':
      return { ...state, areasToRenovate: action.payload };
    case 'SET_FLOOR_REPLACEMENT':
      return { ...state, floorReplacement: action.payload };
    case 'SET_WALL_MODIFICATIONS':
      return { ...state, wallModifications: action.payload };
    case 'SET_CABINET_REMOVAL':
      return { ...state, cabinetRemoval: action.payload };
    case 'SET_KITCHEN_CABINET':
      return { ...state, kitchenCabinet: action.payload };
    case 'SET_WARDROBE':
      return { ...state, wardrobe: action.payload };
    case 'SET_ADDITIONAL_FEATURE':
      return { ...state, additionalFeature: action.payload };
    case 'SET_ESSENTIAL_SERVICES':
      return { ...state, essentialServices: action.payload };
    case 'SET_DOOR_REPLACEMENT':
      return { ...state, doorReplacement: action.payload };
    case 'SET_PLAN_NAME':
      return { ...state, planName: action.payload };
    case 'SET_ERROR':
      return {
        ...state,
        errors: { ...state.errors, [action.payload.step]: action.payload.message }
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        errors: { ...state.errors, [action.payload]: '' }
      };
    default:
      return state;
  }
}

export default function FormPage() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const router = useRouter();

  const handlePropertyTypeChange = (value: string) => {
    dispatch({ type: 'SET_PROPERTY_TYPE', payload: value });
  };

  const getUnitTypes = () => {
    if (!state.propertyType) return [];
    return unitTypesByPropertyType[state.propertyType as keyof typeof unitTypesByPropertyType] || [];
  };

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return (
          <>
            <FormSection label="Property Type">
              <PropertyTypeSelector value={state.propertyType} onChange={handlePropertyTypeChange} />
            </FormSection>
            <FormSection label="Unit Type">
              <CustomDropdown
                label=""
                value={state.unitType}
                options={getUnitTypes()}
                onChange={(value) => dispatch({ type: 'SET_UNIT_TYPE', payload: value })}
                placeholder="Select unit type"
              />
            </FormSection>
            <FormSection label="Property Age">
              <PropertyAgeSelector 
                value={state.propertyAge} 
                onChange={(value) => dispatch({ type: 'SET_PROPERTY_AGE', payload: value })} 
              />
            </FormSection>
            {state.errors[1] && <div className="text-red-500 text-sm mb-2">{state.errors[1]}</div>}
          </>
        );
      case 2:
        return (
          <>
            <FormSection label="Renovation Type">
              <ButtonGroup
                options={renovationTypes}
                value={state.renovationType}
                onChange={(value) => dispatch({ type: 'SET_RENOVATION_TYPE', payload: value })}
              />
            </FormSection>
            <FormSection label="Quality Tier">
              <ButtonGroup
                options={qualityTiers}
                value={state.qualityTier}
                onChange={(value) => dispatch({ type: 'SET_QUALITY_TIER', payload: value })}
              />
            </FormSection>
            <FormSection label="Areas to Renovate">
              <MultiSelectDropdown
                label=""
                value={state.areasToRenovate}
                options={areasOptions}
                onChange={(value) => dispatch({ type: 'SET_AREAS_TO_RENOVATE', payload: value })}
                placeholder="Select areas to renovate"
              />
            </FormSection>
            {state.errors[2] && <div className="text-red-500 text-sm mb-2">{state.errors[2]}</div>}
          </>
        );
      case 3:
        return (
          <>
            <FormSection label="Floor Replacement">
              <ButtonGroup
                options={hackingDemolitionOptions}
                value={state.floorReplacement}
                onChange={(value) => dispatch({ type: 'SET_FLOOR_REPLACEMENT', payload: value })}
              />
            </FormSection>
            <FormSection label="Wall Modifications">
              <ButtonGroup
                options={hackingDemolitionOptions}
                value={state.wallModifications}
                onChange={(value) => dispatch({ type: 'SET_WALL_MODIFICATIONS', payload: value })}
              />
            </FormSection>
            <FormSection label="Cabinet Removal">
              <ButtonGroup
                options={hackingDemolitionOptions}
                value={state.cabinetRemoval}
                onChange={(value) => dispatch({ type: 'SET_CABINET_REMOVAL', payload: value })}
              />
            </FormSection>
            <FormSection label="Kitchen Cabinet">
              <ButtonGroup
                options={hackingDemolitionOptions}
                value={state.kitchenCabinet}
                onChange={(value) => dispatch({ type: 'SET_KITCHEN_CABINET', payload: value })}
              />
            </FormSection>
            <FormSection label="Wardrobe">
              <MultiSelectDropdown
                label=""
                value={state.wardrobe}
                options={wardrobeOptions}
                onChange={(value) => dispatch({ type: 'SET_WARDROBE', payload: value })}
                placeholder="Select bedroom locations"
              />
            </FormSection>
            <FormSection label="Additional Feature">
              <MultiSelectDropdown
                label=""
                value={state.additionalFeature}
                options={additionalFeatureOptions}
                onChange={(value) => dispatch({ type: 'SET_ADDITIONAL_FEATURE', payload: value })}
                placeholder="Select additional features"
              />
            </FormSection>
            {state.errors[3] && <div className="text-red-500 text-sm mb-2">{state.errors[3]}</div>}
          </>
        );
      case 4:
        return (
          <>
            <FormSection label="Essential Services">
              <MultiSelectDropdown
                label=""
                value={state.essentialServices}
                options={essentialServicesOptions}
                onChange={(value) => dispatch({ type: 'SET_ESSENTIAL_SERVICES', payload: value })}
                placeholder="Select essential services"
              />
            </FormSection>
            <FormSection label="Door Replacement">
              <ButtonGroup
                options={doorReplacementOptions}
                value={state.doorReplacement}
                onChange={(value) => dispatch({ type: 'SET_DOOR_REPLACEMENT', payload: value })}
              />
            </FormSection>
            {state.errors[4] && <div className="text-red-500 text-sm mb-2">{state.errors[4]}</div>}
          </>
        );
      case 5:
        return (
          <>
            <FormSection label="Plan Name">
              <input 
                className="w-full px-6 py-2 rounded-lg border text-base font-medium border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500" 
                placeholder="Enter your renovation plan name" 
                value={state.planName} 
                onChange={e => dispatch({ type: 'SET_PLAN_NAME', payload: e.target.value })}
              />
            </FormSection>
            
            <FormSection label="Renovation Summary" required={false}>
              <div className="w-full px-6 py-4 rounded-lg border border-gray-200 bg-white space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Property</label>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{state.propertyType}</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{state.unitType}</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{state.propertyAge}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Renovation Type</label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{state.renovationType}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Quality Tier</label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{state.qualityTier}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Areas to Renovate</label>
                  <div className="flex flex-wrap gap-2">
                    {state.areasToRenovate.map((area, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{area}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Floor Replacement</label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{state.floorReplacement}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Wall Modifications</label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{state.wallModifications}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Cabinet Removal</label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{state.cabinetRemoval}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Kitchen Cabinet</label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{state.kitchenCabinet}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Wardrobe</label>
                  <div className="flex flex-wrap gap-2">
                    {state.wardrobe.map((item, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{item}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Additional Features</label>
                  <div className="flex flex-wrap gap-2">
                    {state.additionalFeature.map((feature, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{feature}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Essential Services</label>
                  <div className="flex flex-wrap gap-2">
                    {state.essentialServices.map((service, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{service}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Door Replacement</label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">{state.doorReplacement || 'Not specified'}</span>
                </div>
              </div>
            </FormSection>
            {state.errors[5] && <div className="text-red-500 text-sm mb-2">{state.errors[5]}</div>}
          </>
        );
      default:
        return null;
    }
  };

  const validateStep = () => {
    switch (state.step) {
      case 1:
        if (!state.propertyType || !state.unitType || !state.propertyAge) {
          dispatch({ type: 'SET_ERROR', payload: { step: state.step, message: 'Please fill all required fields.' } });
          return false;
        }
        break;
      case 2:
        if (!state.renovationType || !state.qualityTier || state.areasToRenovate.length === 0) {
          dispatch({ type: 'SET_ERROR', payload: { step: state.step, message: 'Please fill all required fields.' } });
          return false;
        }
        break;
      case 3:
        if (!state.floorReplacement || !state.wallModifications || !state.cabinetRemoval || !state.kitchenCabinet || state.wardrobe.length === 0 || state.additionalFeature.length === 0) {
          dispatch({ type: 'SET_ERROR', payload: { step: state.step, message: 'Please fill all required fields.' } });
          return false;
        }
        break;
      case 4:
        if (state.essentialServices.length === 0) {
          dispatch({ type: 'SET_ERROR', payload: { step: state.step, message: 'Please fill all required fields.' } });
          return false;
        }
        break;
      case 5:
        if (!state.planName) {
          dispatch({ type: 'SET_ERROR', payload: { step: state.step, message: 'Please enter a plan name.' } });
          return false;
        }
        break;
      default:
        break;
    }
    dispatch({ type: 'CLEAR_ERROR', payload: state.step });
    return true;
  };

  const handleBack = () => {
    if (state.step === 1) {
      router.push("/");
    } else {
      dispatch({ type: 'SET_STEP', payload: state.step > 1 ? state.step - 1 : state.step });
    }
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (state.step === TOTAL_STEPS) {
      router.push("/maintenance");
      return;
    }
    dispatch({ type: 'SET_STEP', payload: state.step < TOTAL_STEPS ? state.step + 1 : state.step });
  };

  return (
    <div className={"responsive-form min-h-screen bg-white flex flex-col"} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div className="flex-1 flex flex-col items-center" style={{ width: '100%', paddingTop: '84px', paddingBottom: '100px' }}>
        <div className="card w-full md:w-1/2 lg:w-1/2">
          <div className="bg-white rounded-lg p-4 mt-2 md:p-8 md:mt-6 w-full">
            <StepProgress step={state.step} total={TOTAL_STEPS} />
            {renderStep()}
            <FormActionButtons
              onBack={handleBack}
              onNext={handleNext}
              backLabel={state.step === 1 ? undefined : 'Back'}
              nextLabel={state.step === TOTAL_STEPS ? 'Finish' : 'Next'}
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