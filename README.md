# Torque Tactix — Car Showroom Website

Marketing and showroom website for **Torque Tactix**, a Dhaka-based automotive brand that imports reconditioned JDM cars and offers car customization services. Built as a single-page React app with a vehicle detail page.

## What it does

- Lets a visitor browse featured vehicles and filter them by **condition** (New / Reconditioned / Used) and **origin** (All / JDM / German).
- Opens a detail page for each car with specs, auction grade, an image gallery and customization options.
- Estimates a monthly car-loan payment (EMI) from price, down payment, interest rate and tenure.
- Answers common buyer questions through a small "Smart Car Finder" chat widget.
- Gives every contact route in one place: phone, WhatsApp, Facebook and an embedded map of the showroom.

## Interface walkthrough

| Section | What the visitor sees |
|---|---|
| **Cinematic intro** | Animated brand reveal with a gold shimmer title. A skip button sits in the bottom-right corner. |
| **Navbar** | Fixed bar with links to Showroom, Services, Finance, About and Contact, plus a one-tap call button. Collapses to a mobile menu. |
| **Vehicle selector** | Condition cards (New, Reconditioned, Used) and brand pills (All, JDM, German). Clicking an active card clears the filter. |
| **Vehicle grid** | Responsive card grid (1 to 4 columns) with a live count such as "8 VEHICLES" and an empty state when no car matches. |
| **Car detail page** (`/car/:id`) | Price, year, mileage, engine, fuel, auction grade, interior photos, and six customization options with starting prices. |
| **Services** | Six services: JDM import, hybrid battery replacement, body kits, ceramic coating, infotainment upgrade, vehicle inspection. |
| **EMI calculator** | Sliders for car price, down payment, rate and tenure. Shows loan amount, monthly EMI, total payment and total interest in ৳. |
| **Smart Car Finder** | Floating button opens a chat panel with quick questions (best hybrid SUV, first car, German vs JDM). |
| **About / Contact / Footer** | Brand story, contact cards and a Google Maps embed. |

Design: dark theme, gold accent, glass-style panels, carbon-fibre texture, scroll animations.

## Key points

- **8 sample vehicles** in `src/data/cars.ts` (Toyota Harrier, Prius, Cross; Honda Insight, CR-V, Civic; BMW 5 Series; Mercedes E250). Prices are in BDT.
- **EMI formula:** `EMI = P × r × (1+r)^n / ((1+r)^n − 1)`, where `r` is the monthly rate and `n` the number of months. A zero rate falls back to simple division.
- **Filtering** runs in the browser with `useMemo`; no backend is needed.
- **Smart Car Finder uses keyword matching with prepared answers.** It is not a live AI model. Replies are defined in `SmartCarFinder.tsx`.
- Vehicle data is static. There is no database or admin panel yet.

## Tech stack

- React 18, TypeScript, Vite 5
- Tailwind CSS 3, shadcn/ui (Radix UI)
- Framer Motion for animation, Lucide for icons
- React Router 6 for routing
- Vitest and Playwright set up for testing (only a placeholder test exists so far)

## Run locally

```bash
git clone https://github.com/mansifty/torquetactix.git
cd torquetactix
npm install
npm run dev        # http://localhost:8080 (or the port Vite prints)
npm run build      # production build in /dist
npm run lint
```

Requires Node.js 18 or newer.

## Project structure

```
src/
  components/   Navbar, VehicleSelector, VehicleGrid, VehicleCard,
                EMICalculator, SmartCarFinder, ServicesSection,
                AboutSection, ContactSection, CinematicIntro, Footer
  components/ui shadcn/ui primitives
  data/cars.ts  Vehicle catalogue
  pages/        Index, CarDetail, NotFound
  assets/       Logo, texture, car images
```

## Roadmap

- [ ] Move vehicle data to a database with an admin screen for adding cars
- [ ] Add a real inquiry form that stores leads
- [ ] Connect the chat widget to a language model
- [ ] Write tests for the EMI calculation and the filters
- [ ] Add the Flask/SQLite ERP (vehicle pipeline, clients, deals) as a separate repository

## Author

Mahir Ahmed (Mansif), founder of Torque Tactix, Dhaka, Bangladesh.
