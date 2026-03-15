import toyotaHarrier from '@/assets/cars/toyota-harrier.png';
import hondaInsight from '@/assets/cars/honda-insight.png';
import toyotaPrius from '@/assets/cars/toyota-prius.png';
import bmw5Series from '@/assets/cars/bmw-5series.png';
import hondaCrv from '@/assets/cars/honda-crv.png';
import mercedesE250 from '@/assets/cars/mercedes-e250.png';
import toyotaCross from '@/assets/cars/toyota-cross.png';
import hondaCivic from '@/assets/cars/honda-civic.png';

export interface Car {
  id: string;
  name: string;
  year: number;
  image: string;
  price: string;
  priceNum: number;
  mileage: string;
  engine: string;
  fuel: string;
  grade: string;
  condition: 'new' | 'reconditioned' | 'used';
  category: 'jdm' | 'german';
  bodyType: string;
}

export const featuredCars: Car[] = [
  {
    id: '1', name: 'Toyota Harrier', year: 2020, image: toyotaHarrier,
    price: '৳52,00,000', priceNum: 5200000, mileage: '12,000 km', engine: '2.0L Turbo',
    fuel: 'Hybrid', grade: '4.5 / B', condition: 'reconditioned', category: 'jdm', bodyType: 'SUV',
  },
  {
    id: '2', name: 'Honda Insight', year: 2020, image: hondaInsight,
    price: '৳38,00,000', priceNum: 3800000, mileage: '18,000 km', engine: '1.5L i-VTEC',
    fuel: 'Hybrid', grade: '4.5 / A', condition: 'reconditioned', category: 'jdm', bodyType: 'Sedan',
  },
  {
    id: '3', name: 'Toyota Prius', year: 2021, image: toyotaPrius,
    price: '৳42,00,000', priceNum: 4200000, mileage: '8,000 km', engine: '1.8L Hybrid',
    fuel: 'Hybrid', grade: '5 / A', condition: 'reconditioned', category: 'jdm', bodyType: 'Sedan',
  },
  {
    id: '4', name: 'BMW 5 Series', year: 2021, image: bmw5Series,
    price: '৳85,00,000', priceNum: 8500000, mileage: '15,000 km', engine: '2.0L Twin-Turbo',
    fuel: 'Petrol', grade: '4 / B', condition: 'reconditioned', category: 'german', bodyType: 'Sedan',
  },
  {
    id: '5', name: 'Honda CR-V', year: 2020, image: hondaCrv,
    price: '৳48,00,000', priceNum: 4800000, mileage: '22,000 km', engine: '1.5L VTEC Turbo',
    fuel: 'Petrol', grade: '4 / B', condition: 'reconditioned', category: 'jdm', bodyType: 'SUV',
  },
  {
    id: '6', name: 'Mercedes E250', year: 2019, image: mercedesE250,
    price: '৳78,00,000', priceNum: 7800000, mileage: '25,000 km', engine: '2.0L Turbo',
    fuel: 'Petrol', grade: '4 / A', condition: 'used', category: 'german', bodyType: 'Sedan',
  },
  {
    id: '7', name: 'Toyota Cross', year: 2019, image: toyotaCross,
    price: '৳35,00,000', priceNum: 3500000, mileage: '30,000 km', engine: '1.8L Hybrid',
    fuel: 'Hybrid', grade: '4 / B', condition: 'reconditioned', category: 'jdm', bodyType: 'SUV',
  },
  {
    id: '8', name: 'Honda Civic', year: 2022, image: hondaCivic,
    price: '৳45,00,000', priceNum: 4500000, mileage: '5,000 km', engine: '1.5L VTEC Turbo',
    fuel: 'Petrol', grade: '5 / A', condition: 'new', category: 'jdm', bodyType: 'Sedan',
  },
];

export const introCarPool = [
  { name: 'Toyota Harrier 2020', image: toyotaHarrier },
  { name: 'Honda Insight 2020', image: hondaInsight },
  { name: 'Toyota Prius 2021', image: toyotaPrius },
  { name: 'BMW 5 Series 2021', image: bmw5Series },
  { name: 'Honda CR-V 2020', image: hondaCrv },
  { name: 'Mercedes E250', image: mercedesE250 },
  { name: 'Toyota Cross 2019', image: toyotaCross },
  { name: 'Honda Civic 2022', image: hondaCivic },
];
