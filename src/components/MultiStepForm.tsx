"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useFormStore } from "@/store/formStore"; // Assuming you use Zustand

const MultiStepForm = () => {
  const { setPersonalInfo, setAddressDetails, setPreferences } = useFormStore();
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Personal Info", content: <PersonalInfo /> },
    { title: "Address Details", content: <AddressDetails /> },
    { title: "Preferences", content: <Preferences /> },
    { title: "Review & Submit", content: <ReviewSubmit /> },
  ];

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch("/api/formState");
        const data = await res.json();
        
        // Update the form state with the fetched data
        setPersonalInfo(data.personalInfo);
        setAddressDetails(data.addressDetails);
        setPreferences(data.preferences);
      } catch (error) {
        console.error("Error fetching mock API data", error);
      }
    }, 5000); // Fetch every 5 seconds
    
    return () => clearInterval(interval); // Cleanup on unmount
  }, [setPersonalInfo, setAddressDetails, setPreferences]);

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <Tabs value={`step${step + 1}`} defaultValue="step1">
        <TabsList>
          {steps.map((_, index) => (
            <TabsTrigger
              key={index}
              value={`step${index + 1}`}
              className="px-4 py-2 text-sm text-gray-1000 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
            >
              Step {index + 1}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="py-6">
          {/* Form Step Content */}
          <motion.div
            key={step} // Trigger animation on step change
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {steps[step].content}
          </motion.div>
        </div>

        {/* Step navigation buttons */}
        <div className="flex justify-between py-6">
          {step > 0 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevStep}
              className="px-6 py-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
            >
              Prev
            </motion.button>
          )}

          {step < steps.length - 1 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextStep}
              className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
            >
              Next
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              // Add form submission logic here
            >
              Submit
            </motion.button>
          )}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </Tabs>
    </div>
  );
};

const PersonalInfo = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">Personal Information</h2>
    <form className="grid grid-cols-2 gap-6">
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 dark:text-gray-300">Name:</label>
        <input
          type="text"
          name="name"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 dark:text-gray-300">Email:</label>
        <input
          type="email"
          name="email"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </form>
  </div>
);

const AddressDetails = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">Address Details</h2>
    <form className="grid grid-cols-2 gap-6">
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 dark:text-gray-300">Address:</label>
        <input
          type="text"
          name="address"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 dark:text-gray-300">City:</label>
        <input
          type="text"
          name="city"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </form>
  </div>
);

const Preferences = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">Preferences</h2>
    <form className="grid grid-cols-2 gap-6">
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 dark:text-gray-300">Subscribe to newsletter:</label>
        <input
          type="checkbox"
          name="newsletter"
          className="h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </form>
  </div>
);

const ReviewSubmit = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">Review & Submit</h2>
    <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
      Submit
    </button>
  </div>
);

export default MultiStepForm;
