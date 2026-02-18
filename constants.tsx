
import React from 'react';
import { NavItem, Service } from './types';

export const BRAND_COLOR = "text-blue-700";
export const BRAND_BG = "bg-blue-700";
export const BRAND_HOVER = "hover:bg-blue-800";

export const NAV_ITEMS: NavItem[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Our Process', href: '#process' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Residential Construction",
    description: "Custom homes tailored to your lifestyle. We handle everything from design to final inspection with precision.",
    icon: "🏠"
  },
  {
    id: 2,
    title: "Commercial Projects",
    description: "Scale your business with robust infrastructure. High-quality office spaces, retail outlets, and warehouses.",
    icon: "🏢"
  },
  {
    id: 3,
    title: "Civil Engineering",
    description: "Strong foundations for the community. Roadworks, bridges, and essential public infrastructure projects.",
    icon: "🏗️"
  },
  {
    id: 4,
    title: "Renovations & Remodeling",
    description: "Transforming existing spaces into modern environments while preserving structural integrity.",
    icon: "🔨"
  },
  {
    id: 5,
    title: "Project Management",
    description: "Comprehensive oversight ensuring your project stays on schedule, within budget, and above standards.",
    icon: "📋"
  },
  {
    id: 6,
    title: "Structural Consulting",
    description: "Expert analysis and advice for complex engineering challenges in modern construction.",
    icon: "📐"
  }
];

export const STATS = [
  { label: "Completed Projects", value: "1,200+", icon: "🏗️" },
  { label: "Safety Hours", value: "850k+", icon: "🛡️" },
  { label: "Expert Staff", value: "150+", icon: "👷" },
  { label: "Years in Business", value: "25+", icon: "⭐" },
];

export const PROJECTS = [
  { 
    title: "Skyline Corporate Center", 
    category: "Commercial", 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "The Heritage Estates", 
    category: "Residential", 
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Harbor Bridge Expansion", 
    category: "Infrastructure", 
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Modern Tech Hub", 
    category: "Commercial", 
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
  },
];

export const PROCESS_STEPS = [
  { id: "01", title: "Consultation", text: "We discuss your vision, budget, and timeline to establish clear goals." },
  { id: "02", title: "Design & Planning", text: "Our architects and engineers create detailed blueprints and material specifications." },
  { id: "03", title: "Construction", text: "Quality execution begins under strict safety and performance standards." },
  { id: "04", title: "Handover", text: "Final inspection, walkthrough, and delivery of your completed asset." },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "CEO, Innovate Offices",
    text: "Titan Construction delivered our corporate headquarters ahead of schedule. Their professionalism is unmatched in the industry.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Property Developer",
    text: "I've worked with many contractors, but Titan's attention to structural detail and safety protocols is on a different level.",
    rating: 5
  },
  {
    name: "Robert Taylor",
    role: "Homeowner",
    text: "They turned our dream home into a reality. The process was transparent, and the craftsmanship is simply beautiful.",
    rating: 5
  }
];

export const TEAM = [
  { name: "James Anderson", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
  { name: "Elena Rodriguez", role: "Chief Architect", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
  { name: "David Wilson", role: "Operations Manager", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
];
