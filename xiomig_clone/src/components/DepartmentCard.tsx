interface DepartmentCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  isVisible?: boolean;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  description, 
  isVisible = true 
}) => {
  return (
    <div className={`animate-fade-in flex flex-col items-center ${isVisible ? 'is-visible' : 'is-hidden'}`}>
      {/* Circle container for the image */}
      <div className="bg-white p-8 flex items-center justify-center size-44 rounded-full overflow-hidden">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="object-cover h-20" 
        />
      </div>
      
      {/* Title and subtitle centered */}
      <h3 className="text-center mt-4 text-xl font-semibold text-white">
        {title}
      </h3>
      <p className="text-center text-sm mt-2 text-neutral-200">
        {description}
      </p>
    </div>
  );
};

export default DepartmentCard;