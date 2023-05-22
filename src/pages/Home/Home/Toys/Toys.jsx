import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar, faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

// Add the imported icons to the FontAwesome library
library.add(farStar, fasStar);
import 'react-tabs/style/react-tabs.css';
import './Toys.css';

const CustomTab = ({ children, ...otherProps }) => (
  <Tab className="custom-tab" {...otherProps}>
    {children}
  </Tab>
);

CustomTab.tabsRole = 'Tab';

const Toys = ({ toys }) => {
  return (
    <div className="flex justify-center items-center">
      <Tabs className="tabs">
        <TabList className="flex space-x-4 mb-10">
          <CustomTab>Disney Princesses</CustomTab>
          <CustomTab>Disney Fairies</CustomTab>
          <CustomTab>Disney Frozen</CustomTab>
        </TabList>

        <TabPanel className="tab-panel">
          <div className="grid md:grid-cols-2 gap-4">
            {toys
              .filter((toy) => toy.category === 'Disney Princesses')
              .map((toy) => (
                <div key={toy._id} className="flex items-center toy-item">
                  <div className="w-full md:w-1/2">
                    <img src={toy.picture} alt={`Toy ${toy._id}`} className="w-full h-auto" />
                  </div>
                  <div className="w-full md:w-1/2 space-y-2">
                    <h3 className="text-lg md:text-xl toy-name">{toy.name}</h3>
                    <p className="toy-price font-bold color-[#5B5F8E]">
                      <FontAwesomeIcon icon={faDollarSign} />
                      &nbsp;{toy.price}
                    </p>

                    <Rating
                      className="custom-rating"
                      initialRating={toy.rating}
                      emptySymbol={<FontAwesomeIcon className="empty" icon={farStar} />}
                      fullSymbol={<FontAwesomeIcon className="full" icon={fasStar} />}
                      readonly
                    />
                    <br />
                    <Link to={`/toy/${toy._id}`}>
                      <button className="btn btn-custom mt-3">View Details</button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>

        <TabPanel className="tab-panel">
          <div className="grid md:grid-cols-2 gap-4">
            {toys
              .filter((toy) => toy.category === 'Disney Fairies')
              .map((toy) => (
                <div key={toy._id} className="flex items-center toy-item">
                  <div className="w-full md:w-1/2">
                    <img src={toy.picture} alt={`Toy ${toy._id}`} className="w-full h-auto" />
                  </div>
                  <div className="w-full md:w-1/2 space-y-2">
                    <h3 className="text-lg md:text-xl toy-name">{toy.name}</h3>
                    <p className="toy-price font-bold color-[#5B5F8E]">
                      <FontAwesomeIcon icon={faDollarSign} />
                      &nbsp;{toy.price}
                    </p>

                    <Rating
                      className="custom-rating"
                      initialRating={toy.rating}
                      emptySymbol={<FontAwesomeIcon className="empty" icon={farStar} />}
                      fullSymbol={<FontAwesomeIcon className="full" icon={fasStar} />}
                      readonly
                    />
                    <br />
                    <Link to={`/toy/${toy._id}`}>
                      <button className="btn btn-custom mt-3">View Details</button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>

        <TabPanel className="tab-panel">
          <div className="grid md:grid-cols-2 gap-4">
            {toys
              .filter((toy) => toy.category === 'Disney Frozen')
              .map((toy) => (
                <div key={toy._id} className="flex items-center toy-item">
                  <div className="w-full md:w-1/2">
                    <img src={toy.picture} alt={`Toy ${toy._id}`} className="w-full h-auto" />
                  </div>
                  <div className="w-full md:w-1/2 space-y-2">
                    <h3 className="text-lg md:text-xl toy-name">{toy.name}</h3>
                    <p className="toy-price font-bold color-[#5B5F8E]">
                      <FontAwesomeIcon icon={faDollarSign} />
                      &nbsp;{toy.price}
                    </p>

                    <Rating
                      className="custom-rating"
                      initialRating={toy.rating}
                      emptySymbol={<FontAwesomeIcon className="empty" icon={farStar} />}
                      fullSymbol={<FontAwesomeIcon className="full" icon={fasStar} />}
                      readonly
                    />
                    <br />
                    <Link to={`/toy/${toy._id}`}>
                      <button className="btn btn-custom mt-3">View Details</button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>

        {/* Add more TabPanels with the same structure and styling here */}
      </Tabs>
    </div>
  );
};

export default Toys;
