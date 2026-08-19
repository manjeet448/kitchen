export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { 
    label: "Products", 
    href: "/products",
    dropdown: [
      { label: "Cooking Equipment", href: "/products?category=cooking-equipment" },
      { label: "Bakery & Pizza Equipment", href: "/products?category=bakery-pizza" },
      { label: "Refrigeration", href: "/products?category=refrigeration" },
      { label: "Food Processing", href: "/products?category=food-processing" },
      { label: "Dishwashing", href: "/products?category=dishwashing" },
      { label: "Bar Equipment", href: "/products?category=bar-equipment" },
      { label: "Display & Serving", href: "/products?category=display-serving" },
      { label: "Custom Fabrication", href: "/products?category=custom-fabrication" },
      { label: "Smallwares & Accessories", href: "/products?category=accessories" },
      { label: "View All Products →", href: "/products" }
    ]
  },
  { 
    label: "Brands", 
    href: "/brands",
    dropdown: [
      { label: "Rational", href: "/brands#rational" },
      { label: "Hobart", href: "/brands#hobart" },
      { label: "Scotsman", href: "/brands#scotsman" },
      { label: "Manitowoc", href: "/brands#manitowoc" },
      { label: "Robot Coupe", href: "/brands#robot-coupe" },
      { label: "Sirman", href: "/brands#sirman" },
      { label: "Electrolux", href: "/brands#electrolux" },
      { label: "UNOX", href: "/brands#unox" },
      { label: "Hatco", href: "/brands#hatco" },
      { label: "Ozt", href: "/brands#ozt" }
    ]
  },
  { 
    label: "Solutions", 
    href: "/solutions",
    dropdown: [
      { label: "Hotel Kitchen", href: "/solutions#hotel-kitchen" },
      { label: "Restaurant Kitchen", href: "/solutions#restaurant-kitchen" },
      { label: "Bakery & Café", href: "/solutions#bakery-cafe" },
      { label: "Cloud Kitchen", href: "/solutions#cloud-kitchen" },
      { label: "Hospital Kitchen", href: "/solutions#hospital-kitchen" },
      { label: "Institutional Kitchen", href: "/solutions#institutional-kitchen" },
      { label: "Bar & Beverage", href: "/solutions#bar-beverage" },
      { label: "Kitchen Design & Planning", href: "/solutions#kitchen-design" }
    ]
  },
  { label: "Projects", href: "/projects" },
  { label: "Spare Parts", href: "/products?category=accessories" },
  { 
    label: "Services", 
    href: "/services",
    dropdown: [
      { label: "Kitchen Design & Planning", href: "/services#design-planning" },
      { label: "Equipment Supply", href: "/services#equipment-supply" },
      { label: "Custom Fabrication", href: "/services#custom-fabrication" },
      { label: "Installation & Commissioning", href: "/services#installation" },
      { label: "Repair & Service", href: "/services#repair-service" },
      { label: "AMC", href: "/services#amc" },
      { label: "Spare Parts", href: "/services#spare-parts" },
      { label: "Technical Support", href: "/services#technical-support" }
    ]
  },
  { label: "Contact", href: "/contact" }
];
