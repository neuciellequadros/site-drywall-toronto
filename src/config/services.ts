import { ServiceItem, ProjectItem, ProcessStep, TestimonialItem } from "@/types";
import { p } from "framer-motion/client";

export const servicesData: ServiceItem[] = [
  {
    id: "drywall-installation",
    title: "Drywall Installation",
    tag: "EXPLORE BOARDING",
    shortDesc:
      "Professional boarding and installation for residential luxury custom homes and commercial projects across Toronto.",
    fullDesc:
      "Precision stud layout verification, screw pattern compliance, fire-rated sheet hanging (Type X), sound-rated boards (QuietRock), and moisture-resistant drywall for bathrooms and basements.",
    iconName: "Layers",
    features: [
      "Precision stud spacing & laser level checks",
      "Soundproofing & acoustic insulation assemblies",
      "Fire-rated & moisture-resistant drywall boards",
      "Staggered joints preventing future settling cracks",
    ],
    image:
      "/images/drywallInstalations.jpeg",
  },


  {
    id: "master-taping",
    title: "Master Taping & Mudding",
    tag: "SEAMLESS TAPING",
    shortDesc:
      "Multi-coat taping process delivering seamless wall and ceiling surfaces with zero pinholes or ridge lines.",
    fullDesc:
      "Using premium setting-type and all-purpose compounds, high-tensile paper tape, and Fibafuse. Inside and outside corners reinforced with structural corner beads (tape-on, paper-faced, and metal).",
    iconName: "PenTool",
    features: [
      "Fibafuse & high-tensile paper tape bedding",
      "Multi-coat feathering with wide finishing blades",
      "Precision straight corner bead installations",
      "No blistering, cracking, or telegraphing seams",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1HXnJizpimcKVgvNtIEbjRQoDkBekmO_y5m3Opssh16zWJNoCOFSQdZEipn_FanPF2A3sBHzf-8L4zq5bhlUk0vPYVauIN8V8rvpfIipJgvIhbC3H7k7t2dlCBaGLh-DEpEkCWHy9ijQt9-pdzaVLwyzPiUemCZVo4ytvt75B6YA_6JOg_Oj_fyWQP6tIV4RNnqpCfBrWlTTkmWztXjMQlv0JQSdR3sF7C0S4CLGO_YPWDQO0x6Dq",
  },
  {
    id: "level5-finishing",
    title: "Level 5 Mirror Finishes",
    tag: "LEVEL 5 SPECS",
    shortDesc:
      "The pinnacle architectural drywall specification: a uniform skim coat over the entire substrate for mirror-smooth surfaces.",
    fullDesc:
      "Essential for areas exposed to critical natural raking light, high-gloss enamel paints, dark pigment paints, and high-end wallpaper finishes. Eliminates differential absorption between paper and compound.",
    iconName: "Sparkles",
    features: [
      "Full surface skim coat across 100% of wall field",
      "Uniform absorption ready for high-sheen designer paints",
      "Inspected with 5000-lumen halogen raking lights",
      "Exceeds ASTM C840 and GA-214 standard specifications",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAChv_NtAs7Ra_DH3ZpN2Uioob8ndV8JDzfB2tOyDgr-ZCX_PZLfFc7rjqhhqFwYGs_4g0t8ANuxT3VkgnbAr_EvJ1tszoXc4IIVcBR_Egb4Ivtr0XER5Y0c2s3VJJbCJUle5zPtoi0r5jDfkQxJxjz2WclNc42cJlm8x7XBcqATd1UxtZoQ6fsBdMw3ho1ASMrrWYSJjKfNxfRwuuwetZgDAIRro9GXYJdJr4kJ0EsRA1KXeAuGGOSDoOXDnY1oL6YLg",
  },
  {
    id: "custom-cove-ceilings",
    title: "Architectural & Cove Ceilings",
    tag: "CUSTOM ARCHITECTURE",
    shortDesc:
      "Custom bulkheads, coffered ceilings, perimeter LED light troughs, and flush architectural drywall reveals.",
    fullDesc:
      "Specialized framing and boarding for architectural designs: hidden curtain pockets, floating acoustic cloud ceilings, curved barrel vaults, and Fry Reglet shadowline reveal trims.",
    iconName: "Compass",
    features: [
      "Integrated perimeter LED cove light channels",
      "Coffered, tray, and multi-tier dropped ceilings",
      "Shadowline reveal beads (Fry Reglet & Z-shadows)",
      "Concealed curtain pockets and flush AC return details",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6mlFBMakgVY32Z1dpvxg19mj1vrmmQBFbfquZok46_swjcZzpZrT6pljq2iSmoFnk6mZn_ro4peczgLTxSLyiMbU3JxOmcd_gc8zPyZmCrAAjvmCg00uDN3jgLP3qqCwAYx8Npvu5BYrr5dVd87PEQIqAcx27ckVh3ATXQ4K_ErRwoVX9lNZlmDXSiu89AdrzAmNlCzlQHPB_0CfqbGyIpNLnTtNls49gLtQ7C6jIpNepK72A4VhQ",
  },
  {
    id: "drywall-repairs",
    title: "Drywall Repair & Restoration",
    tag: "FAST RESTORATION",
    shortDesc:
      "Rapid restoration for water-damaged drywall, plumbing access holes, settling structural cracks, and texture blending.",
    fullDesc:
      "Careful substrate repair, mold-treated backing, butterfly and backer board patches, followed by feathered multi-coat taping and texture matching that blends completely invisibly into existing walls.",
    iconName: "Wrench",
    features: [
      "Water damage ceiling and wall reconstruction",
      "Electrical, HVAC, and plumbing cut-out repairs",
      "Settling stress crack reinforcement with mesh & fiberglass",
      "Seamless feathering ready for spot touch-up painting",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCgAsOPXHcSJ2gEZNZeynKpJI_EEG7Eb2FDmm3qHIjfd9mxBisSj2cjUYRYeRkyr4l4yUIIDe9lwk8pCob6JawUzCUXYdi7mhqIZQREP6a-slzB3ULiLr6is1cK20taxv0_15r2TYwfTyclcjKMfsBvF1ilNYsfiDrGqnQajtSmtripZ_UQsNbKEV7sKYKqc6bmc6E1uJrTpS8HD4IDl7BAdFgxcAKK17y5t3zk2rpNd9LAwVXvukd",
  },
  {
    id: "commercial-fitouts",
    title: "Commercial & Condo Fit-Outs",
    tag: "COMMERCIAL SPECS",
    shortDesc:
      "High-output, schedule-critical drywall assemblies for retail boutiques, commercial offices, and downtown Toronto condos.",
    fullDesc:
      "Full adherence to strict building code requirements, elevator bookings, floor protection standards, and commercial sound transmission class (STC) partition walls.",
    iconName: "Building2",
    features: [
      "Rigid adherence to General Contractor milestone dates",
      "Steel stud framing & shaft-wall sound partitions",
      "Downtown high-rise condo protocol & clean containment",
      "WSIB compliant, fully insured with site safety protocols",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1HXnJizpimcKVgvNtIEbjRQoDkBekmO_y5m3Opssh16zWJNoCOFSQdZEipn_FanPF2A3sBHzf-8L4zq5bhlUk0vPYVauIN8V8rvpfIipJgvIhbC3H7k7t2dlCBaGLh-DEpEkCWHy9ijQt9-pdzaVLwyzPiUemCZVo4ytvt75B6YA_6JOg_Oj_fyWQP6tIV4RNnqpCfBrWlTTkmWztXjMQlv0JQSdR3sF7C0S4CLGO_YPWDQO0x6Dq",
  },
];

export const projectItems: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Multi-Level Coffered Ceilings",
    category: "residential",
    categoryLabel: "Custom Estate",
    location: "Oakville, ON",
    description:
      "Level 5 skim finish across a 6,200 sq ft custom estate with seamless concealed perimeter LED channels and multi-tier bulkheads.",
    specs: "Level 5 Finish • LED Coves • HEPA Sanded",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAChv_NtAs7Ra_DH3ZpN2Uioob8ndV8JDzfB2tOyDgr-ZCX_PZLfFc7rjqhhqFwYGs_4g0t8ANuxT3VkgnbAr_EvJ1tszoXc4IIVcBR_Egb4Ivtr0XER5Y0c2s3VJJbCJUle5zPtoi0r5jDfkQxJxjz2WclNc42cJlm8x7XBcqATd1UxtZoQ6fsBdMw3ho1ASMrrWYSJjKfNxfRwuuwetZgDAIRro9GXYJdJr4kJ0EsRA1KXeAuGGOSDoOXDnY1oL6YLg",
  },
  {
    id: "proj-2",
    title: "Curved Bulkhead & Reveal Trim",
    category: "ceilings",
    categoryLabel: "Penthouse Suite",
    location: "Yorkville, Toronto",
    description:
      "Architectural drywall shadowlines, custom curved bulkhead transitions, and acoustic sound dampening boarding.",
    specs: "Fry Reglet Reveals • Curved Bulkheads • Acoustical STC",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6mlFBMakgVY32Z1dpvxg19mj1vrmmQBFbfquZok46_swjcZzpZrT6pljq2iSmoFnk6mZn_ro4peczgLTxSLyiMbU3JxOmcd_gc8zPyZmCrAAjvmCg00uDN3jgLP3qqCwAYx8Npvu5BYrr5dVd87PEQIqAcx27ckVh3ATXQ4K_ErRwoVX9lNZlmDXSiu89AdrzAmNlCzlQHPB_0CfqbGyIpNLnTtNls49gLtQ7C6jIpNepK72A4VhQ",
  },
  {
    id: "proj-3",
    title: "Full 22ft Great Room Framing & Taping",
    category: "residential",
    categoryLabel: "New Residence",
    location: "Forest Hill, Toronto",
    description:
      "Double-height cathedral wall finishes engineered to withstand severe natural sunlight without flashing or seam telegraphing.",
    specs: "22ft Double Height • Raking Light QC • Zero Seams",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCgAsOPXHcSJ2gEZNZeynKpJI_EEG7Eb2FDmm3qHIjfd9mxBisSj2cjUYRYeRkyr4l4yUIIDe9lwk8pCob6JawUzCUXYdi7mhqIZQREP6a-slzB3ULiLr6is1cK20taxv0_15r2TYwfTyclcjKMfsBvF1ilNYsfiDrGqnQajtSmtripZ_UQsNbKEV7sKYKqc6bmc6E1uJrTpS8HD4IDl7BAdFgxcAKK17y5t3zk2rpNd9LAwVXvukd",
  },
  {
    id: "proj-4",
    title: "Integrated Columns & Recessed Troughs",
    category: "commercial",
    categoryLabel: "Commercial Boutique",
    location: "Vaughan, ON",
    description:
      "Commercial showroom drywall assembly with fire-rated barriers, crisp 90-degree corner beads, and smooth continuous surfaces.",
    specs: "Commercial Fitout • Fire Rated • Zero Touchups",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1HXnJizpimcKVgvNtIEbjRQoDkBekmO_y5m3Opssh16zWJNoCOFSQdZEipn_FanPF2A3sBHzf-8L4zq5bhlUk0vPYVauIN8V8rvpfIipJgvIhbC3H7k7t2dlCBaGLh-DEpEkCWHy9ijQt9-pdzaVLwyzPiUemCZVo4ytvt75B6YA_6JOg_Oj_fyWQP6tIV4RNnqpCfBrWlTTkmWztXjMQlv0JQSdR3sF7C0S4CLGO_YPWDQO0x6Dq",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Free Consultation & Blueprint Review",
    description:
      "Detailed site walkthrough or digital blueprint plan analysis with clear, itemized pricing and timeline commitments.",
  },
  {
    step: "02",
    title: "Substrate Check & Clean Hanging",
    description:
      "Laser verification of framing straightness, heavy floor protection with Ram Board, and precision screw fastening without paper rupture.",
  },
  {
    step: "03",
    title: "Multi-Coat Taping & Level 5 Skim",
    description:
      "Tape embedding, bed coat, secondary coat, and optional Level 5 full skim using premium compounds feathered to perfection.",
  },
  {
    step: "04",
    title: "HEPA Dustless Sand & Raking Light QC",
    description:
      "Vacuum-assisted HEPA sanding to protect interiors, followed by rigorous 5000-lumen halogen raking light inspection for 100% defect-free walls.",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    quote:
      "MS Drywall Finish handled our entire 6,200 sq ft custom home build in Oakville. Their Level 5 finish on our 14-foot open concept living room ceilings is immaculate under direct morning sun. Flawless work.",
    author: "Marcello C.",
    role: "Custom Home Builder",
    location: "Oakville, ON",
    rating: 5,
    isPlaceholder: true,
  },
  {
    id: "test-2",
    quote:
      "The speed and dustless sanding setup saved our timeline. They installed intricate recessed drywall reveals for LED strips with pinpoint accuracy. Hands down the cleanest drywall crew in Toronto.",
    author: "Sarah R.",
    role: "Interior Architect",
    location: "Yorkville, Toronto",
    rating: 5,
    isPlaceholder: true,
  },
  {
    id: "test-3",
    quote:
      "Punctual, communicative, and true artists with the trowel. Delivered our commercial showroom in Vaughan ahead of schedule, with zero drywall touchups needed by the painting team.",
    author: "David V.",
    role: "Commercial General Contractor",
    location: "Vaughan & GTA",
    rating: 5,
    isPlaceholder: true,
  },
];

