import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';
import Card from './Card';

const Cards = () => {
  return (
    <div className='flex flex-col md:flex-row bg-white my-16 p-16'>
      <Card
        title={'Single User'}
        cost={`$149`}
        storage={`500 GB Storage`}
        usersAllowed={'1 User Allowed'}
        maxStorage={'Send up to 2 GB'}
        image={Single} // Pass the Single image as a prop
        btnColor={'bg-green-300'}
        textColor={'bg-black'}
      />
      <Card
        title={'Partnership'}
        cost={`$199`}
        storage={`1 TB Storage`}
        usersAllowed={'3 User Allowed'}
        maxStorage={'Send up to 10 GB'}
        image={Double} // Pass the Double image as a prop
        btnColor={'bg-black'}
        textColor={'text-white'}
      />
      <Card
        title={'Group account'}
        cost={`$299`}
        storage={`5 TB Storage`}
        usersAllowed={'10 User Allowed'}
        maxStorage={'Send up to 20 GB'}
        image={Triple} // Pass the Triple image as a prop
        btnColor={'bg-green-300'}
        textColor={'bg-black'}
      />
    </div>
  );
};

export default Cards;
