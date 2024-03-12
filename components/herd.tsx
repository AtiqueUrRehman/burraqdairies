const herd = [
  {
    name: "Ajwa",
    mother: "NA",
    father: "NA",
    code: "G01",
    breed: "Makhi Cheena",
    age: "2 teeth",
    children: "0",
    imageUrl: "/assets/img/gallery/goats_atique.jpg",
  },
  {
    name: "Ajwa",
    mother: "NA",
    father: "NA",
    code: "G01",
    breed: "Makhi Cheena",
    age: "2 teeth",
    children: "0",
    imageUrl: "/assets/img/gallery/goats_atique.jpg",
  },
  {
    name: "Ajwa",
    mother: "NA",
    father: "NA",
    code: "G01",
    breed: "Makhi Cheena",
    age: "2 teeth",
    children: "0",
    imageUrl: "/assets/img/gallery/goats_atique.jpg",
  },
];

export default function Herd() {
  return (
    <div className="bg-white z-0 relative">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-4xl">
              Our Herd
            </h2>
            <p className="text-xl text-gray-500">
              All our animals are top of the line and pure-bred. We keep track of pedigree, nutrition, vaccination and growth from birth of each animal.
              Get in touch for more information or to visit us! 
            </p>
          </div>
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {herd.map((goat) => (
              <li key={goat.imageUrl}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src={goat.imageUrl}
                      alt=""
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="mt-0">
                      <dl className="grid grid-cols-2 gap-x-4 gap-y-4">
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Name
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {goat.name}
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Breed
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {goat.breed}
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Sire (Father)
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {goat.father}
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Dam (Mother)
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {goat.mother}
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Age
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {goat.age}
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            No. of children
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {goat.children}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
