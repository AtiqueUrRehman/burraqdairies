import ProductCatalogItem from "./milk_bottle";
export default function Catalogue() {
  return (
    <div className="bg-white z-0 relative">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-4xl">
              Catalogue
            </h2>
            <p className="text-xl text-gray-500">
              Our offering include Pure Organic Goat Milk and Goat Desi Ghee. 
              Our products are free of preservatives, harmones or any other chemical, fresh from farm to your doorstep.
            </p>
          </div>
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <ProductCatalogItem
            title="Pure Goat Milk (1 lit bottle)"
            description="Fresh, pure, organic goat milk. No preservatives, no hormones, no chemicals. Fresh from farm to your doorstep."
            imageUrl="milk_bottle.png"/>
          </div>
        </div>
      </div>
    </div>
  );
}
