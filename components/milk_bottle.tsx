import React from 'react';

// Define the type for the component props
type ProductCatalogItemProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const ProductCatalogItem: React.FC<ProductCatalogItemProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="product-catalog-item">
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <div className="space-y-1">
          <div className="mt-0">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-4">
              <div className="pt-2">
                <dt className="text-sm font-medium text-gray-500">
                  Milk Type
                </dt>
                <dd className="text-base font-bold tracking-tight text-gray-900">
                  Goat Milk
                </dd>
              </div>
              <div className="pt-2">
                <dt className="text-sm font-medium text-gray-500">
                  Pasturised/ Raw 
                </dt>
                <dd className="text-base font-bold tracking-tight text-gray-900">
                  Both available on request
                </dd>
              </div>
              
              <div className="border-t-2 border-gray-100 pt-2">
                <dt className="text-sm font-medium text-gray-500">
                  Quantity
                </dt>
                <dd className="text-base font-bold tracking-tight text-gray-900">
                  1 liter
                </dd>
              </div>
              <div className="border-t-2 border-gray-100 pt-2">
                <dt className="text-sm font-medium text-gray-500">
                  Shelf Life
                </dt>
                <dd className="text-base font-bold tracking-tight text-gray-900">
                  1 week 
                </dd>
              </div>
              <div className="border-t-2 border-gray-100 pt-2">
                <dt className="text-sm font-medium text-gray-500">
                  Preservatives
                </dt>
                <dd className="text-base font-bold tracking-tight text-gray-900">
                  None
                </dd>
              </div>
              <div className="border-t-2 border-gray-100 pt-2">
                <dt className="text-sm font-medium text-gray-500">
                  Allergy warnings
                </dt>
                <dd className="text-base font-bold tracking-tight text-gray-900">
                  Product contains lactose
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <a href='https://api.whatsapp.com/send?phone=+923130794980&text=Hi, I saw your website may I would like to order Goat Milk.'>
          <button className="order-now-button">Order Now</button>
        </a>
      </div>

      {/* Styles could also be extracted to a separate CSS/SCSS file */}
      <style jsx>{`
        .product-catalog-item {
          display: flex;
          background: white;
          margin-bottom: 24px;
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .product-image, .product-details {
          flex: 1;
        }
        .product-image img {
          width: 100%;  // This ensures the image takes the full width of its parent
          height: auto; // This ensures the image height scales proportionally
          display: block; // This removes any extra space below the image
        }
        .product-details {
          padding-left: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .product-title {
          margin: 0;
          font-size: 24px;
          font-weight: bold;
        }
        .product-description {
          font-size: 16px;
          color: #666;
        }
        .information-button, .shipping-button {
          margin-top: 8px;
          padding: 8px 16px;
          border: 1px solid #ccc;
          background: transparent;
          cursor: pointer;
          text-align: left;
        }
        .information-button:hover, .shipping-button:hover {
          border-color: #888;
        }
        .order-now-button {
          margin-top: 16px;
          padding: 10px 20px;
          background-color: grey;
          color: white;
          border: none;
          border-radius: 5px; /* This will give the button rounded corners */
          cursor: pointer;
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 1px;
        }
        .order-now-button:hover {
          background-color: darkgrey;
        }

        /* Media Query for Mobile */
        @media (max-width: 768px) {
          .product-catalog-item {
            flex-direction: column;
          }
          .product-image, .product-details {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductCatalogItem;
