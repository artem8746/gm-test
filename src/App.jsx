import { TapIcon } from './icons/TapIcon';
import { RollerIcon } from './icons/RollerIcon';
import { CouchIcon } from './icons/CouchIcon';
import { PlugIcon } from './icons/PlugIcon';
import { DoorIcon } from './icons/DoorIcon';
import { ApplianceIcon } from './icons/ApplianceIcon';
import { HomeIcon } from './icons/HomeIcon';
import { ImageIcon } from './icons/ImageIcon';
import { OutdoorIcon } from './icons//OutdoorIcon';
import { CategoryCard } from './components/CategoryCard/CategoryCard';
import styles from './App.module.css';

function App() {
  const categories = [
    {
      icon: TapIcon(),
      title: 'Plumbing',
      specs: [
        'Install / Replace a Toilet',
        'Install / Replace a Faucet',
        'Fix a Leaking',
        'Install / Replace a Sink',
        'Repair Under Sink Plumbing',
      ],
      color: '#179D2E'
    },
    {
      icon: RollerIcon(),
      title: 'Drywall & painting',
      specs: [
        'Install Drywall',
        'Patch and Paint Drywall',
        'Paint a Wall / Trim',
        'Paint or Stain A Fence',
        'Paint a Cabinet Door',
      ],
      color: '#0177B8'
    },
    {
      icon: CouchIcon(),
      title: 'Furniture assembly',
      specs: [
        'Assemble Fitness Equipment',
        'Assemble - Custom Request',
        'Assemble a TV Stand',
        'Assemble Pet Furniture',
        'Assemble a Bar Cabinet',
      ],
      color: '#F5AF23'
    },
    {
      icon: PlugIcon(),
      title: 'Electrical',
      specs: [
        'Install / Replace a Ceiling Fan',
        'Replace Switch & Outlet Faceplate',
        'Upgrade to a Video Doorbell',
        'Install / Replace an Bathroom Exhaust Fan',
      ],
      color: '#F02E2C'
    },
    {
      icon: DoorIcon(),
      title: 'Doors & windows',
      specs: [
        'Install / Replace New Door',
        'Install / Replace a Screen Door',
        'Install / Replace a Window Screen',
        'Repair a Door Frame',
      ],
      color: '#179D2E'
    },
    {
      icon: ImageIcon(),
      title: 'Hanging & mounting',
      specs: [
        'Mount a TV',
        'Remove a TV Mount from Wall',
        'Mount and Hang a Projector Screen',
        'Hang a Bathroom Fixture',
      ],
      color: '#0177B8'
    },
    {
      icon: ApplianceIcon(),
      title: 'Appliance installation',
      specs: [
        'Replace an Existing Dishwasher',
        'Replace an Existing Microwave',
        'Replace an Existing Oven',
      ],
      color: '#F5AF23'
    },
    {
      icon: HomeIcon(),
      title: 'Smart home',
      specs: [
        'Install a Smart Lock',
        'Install a Smart Home Security Camera',
        'Mount a Baby Monitor Camera on the Wall',
        'Install an Under Sink Water Filtration System ',
      ],
      color: '#F02E2C'
    },
    {
      icon: OutdoorIcon(),
      title: 'Outdoor',
      specs: [
        'Assemble an Outdoor Trampoline',
        'Hang a Garage Shelving Unit',
        'Install Outdoor Decorative Exterior Window Shutters',
        'Install a Storm Door',
      ],
      color: '#179D2E'
    },
  ];

  return (
    <section className={styles.categories}>
      {
        categories.map((category) => (
          // eslint-disable-next-line react/jsx-key
          <CategoryCard
            icon={category.icon}
            title={category.title}
            specs={category.specs}
            color={category.color}
          />
        )
        )
      }
    </section>
  )
}

export default App
