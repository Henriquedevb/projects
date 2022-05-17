interface ICradsProjects {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export function CardProject({
  description,
  href,
  imageAlt,
  imageSrc,
  name,
}: ICradsProjects) {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex">
      <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
        <h2 className="text-2xl font-extrabold text-gray-900">{name}</h2>

        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-x-6">
          <div className="group relative">
            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
              <a href={href}>
                <span className="absolute inset-0" />
                {}
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
