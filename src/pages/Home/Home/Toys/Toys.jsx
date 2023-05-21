import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Toys = ({toys}) => {
    
    return (
        <div className="flex justify-center items-center">
      <Tabs>
        <TabList>
          <Tab>Disney Princesses</Tab>
          <Tab>Disney Fairies</Tab>
          <Tab>Disney Frozen</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-2 gap-4">
            {toys
              .filter((toy) => toy.category === 'Disney Princesses')
              .map((toy) => (
                <div key={toy._id} className="flex items-center">
                  <div className="w-1/2">
                    <img src={toy.picture} alt={`Toy ${toy._id}`} className="w-full h-auto" />
                  </div>
                  <div className="w-1/2">
                    <h3>{toy.name}</h3>
                    <p>Price: ${toy.price}</p>
                    <p>Rating: {toy.rating}</p>
                    <Link to={`/toy/${toy._id}`}>
                    <button className='btn btn-custom mt-3'>View Details</button>
                </Link>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-2 gap-4">
            {toys
              .filter((toy) => toy.category === 'Disney Fairies')
              .map((toy) => (
                <div key={toy._id} className="flex items-center">
                  <div className="w-1/2">
                    <img src={toy.picture} alt={`Toy ${toy._id}`} className="w-full h-auto" />
                  </div>
                  <div className="w-1/2">
                    <h3>{toy.name}</h3>
                    <p>Price: ${toy.price}</p>
                    <p>Rating: {toy.rating}</p>
                    <Link to={`/toy/${toy._id}`}>
                    <button className='btn btn-custom mt-3'>View Details</button>
                </Link>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-2 gap-4">
            {toys
              .filter((toy) => toy.category === 'Disney Frozen')
              .map((toy) => (
                <div key={toy._id} className="flex items-center">
                  <div className="w-1/2">
                    <img src={toy.picture} alt={`Toy ${toy._id}`} className="w-full h-auto" />
                  </div>
                  <div className="w-1/2">
                    <h3>{toy.name}</h3>
                    <p>Price: ${toy.price}</p>
                    <p>Rating: {toy.rating}</p>
                    <Link to={`/toy/${toy._id}`}>
                    <button className='btn btn-custom mt-3'>View Details</button>
                </Link>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
    );
};

export default Toys;