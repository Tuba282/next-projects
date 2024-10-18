'use client';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Index from './components';
import About from './components/about';
import Projects from './components/projects';
import Certificates from './components/certificates';
import Experience from './components/experience';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [activeComponent, setActiveComponent] = useState('Index');

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Index />;
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Certificate':
        return <Certificates />;
      case 'Experience':
        return <Experience />;
      default:
        return <Index />;
    }
  };

  type Tpages = {
    name: string;
    icon: string;
  };

  const pages: Tpages[] = [
    { name: 'Dashboard', icon: 'fluent:home-16-regular' },
    { name: 'About', icon: 'fluent-mdl2:education' },
    { name: 'Projects', icon: 'ant-design:fund-projection-screen-outlined' },
    { name: 'Certificate', icon: 'ph:certificate' },
    { name: 'Experience', icon: 'hugeicons:book-open-02' },
  ];

  return (
    <div className="main-container min-h-[100%]:">
      <div className="sub-container">
        <div className={`sidebar ${isActive ? 'active' : ''} p-[2em] rounded-3xl`}>
          <div className="top">
            <div className="logo flex justify-between items-center">
              <Link className='logo-text text-3xl' href="/">Tuba Jan</Link>
              <Icon className='menu text-3xl' icon="mi:menu" onClick={toggleMenu} />
            </div>
          </div>
          <hr className='my-4 opacity-25' />
          <ul className={`pages grid items-center gap-10 py-10 cursor-pointer`}>
            {pages.map((page) => (  
              <li key={page.name} className='li'>
                <a onClick={() => setActiveComponent(page.name)} className='link'>
                  <Icon className='inline text-xl icon' icon={page.icon} />
                  <span className='page-li'>{page.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <hr className='my-4 opacity-25' />
        </div>
        <div className="frontSide">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}
