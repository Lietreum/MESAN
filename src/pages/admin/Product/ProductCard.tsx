import React from 'react';
import Products from '../../../components/admin/Product/Products';

const ProductPage: React.FC = () => {
  const handleEdit = () => {
    console.log('Edit button clicked!');
  };

  return (
    <div className="container mx-auto px-4">
      {/* Grid layout for responsive design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4">
          <Products
            sellerName="Bu Rini"
            productName="Seblak"
            price="$240.00"
            imageUrl="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
            inStock={true}
            onEdit={handleEdit}
          />
        </div>
        <div className="p-4">
          <Products
            sellerName="Bu Rini"
            productName="Seblak"
            price="$240.00"
            imageUrl="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
            inStock={true}
            onEdit={handleEdit}
          />
        </div>
        <div className="p-4">
          <Products
            sellerName="Bu Rini"
            productName="Seblak"
            price="$240.00"
            imageUrl="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
            inStock={true}
            onEdit={handleEdit}
          />
        </div>
        <div className="p-4">
          <Products
            sellerName="Bu Rini"
            productName="Seblak"
            price="$240.00"
            imageUrl="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
            inStock={true}
            onEdit={handleEdit}
          />
        </div>
        <div className="p-4">
          <Products
            sellerName="Bu Rini"
            productName="Seblak"
            price="$240.00"
            imageUrl="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
            inStock={true}
            onEdit={handleEdit}
          />
        </div>
        <div className="p-4">
          <Products
            sellerName="Bu Rini"
            productName="Seblak"
            price="$240.00"
            imageUrl="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
            inStock={true}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
