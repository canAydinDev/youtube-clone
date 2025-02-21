import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "Emergency Medicine",
  "Forensic Medicine",
  "Family Medicine",
  "Anesthesiology and Reanimation",
  "Neurosurgery",
  "Pediatric Surgery",
  "Pediatrics",
  "Child and Adolescent Psychiatry",
  "Dermatology",
  "Infectious Diseases and Clinical Microbiology",
  "Physical Medicine and Rehabilitation",
  "General Surgery",
  "Thoracic Surgery",
  "Pulmonology",
  "Ophthalmology",
  "Public Health",
  "Histology and Embryology",
  "Internal Medicine",
  "Immunology and Allergy Diseases",
  "Obstetrics and Gynecology",
  "Cardiovascular Surgery",
  "Cardiology",
  "Otorhinolaryngology (ENT)",
  "Neurology",
  "Nuclear Medicine",
  "Orthopedics and Traumatology",
  "Plastic, Reconstructive and Aesthetic Surgery",
  "Psychiatry",
  "Radiation Oncology",
  "Radiology",
  "Sports Medicine",
  "Medical Biochemistry",
  "Medical Pharmacology",
  "Medical Genetics",
  "Medical Microbiology",
  "Medical Pathology",
  "Urology",
];

async function main() {
  console.log("Seeding categories...");

  try {
    const value = categoryNames.map((name) => ({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }));

    await db.insert(categories).values(value);

    console.log("Categories seeded successfully!");
  } catch (error) {
    console.error("Error seeding categories: ", error);
    process.exit(1);
  }
}

main();
