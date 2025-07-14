type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tags: string[];
};

const ProjectCard = ({
  title,
  description,
  image,
  github,
  demo,
  tags,
}: ProjectCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/30 transition duration-300 w-full max-w-sm mx-auto">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg"
      />

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-xs text-gray-300 leading-relaxed">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-xs">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-pink-600/20 text-pink-300 px-2 py-0.5 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-xs font-semibold bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded transition"
          >
            GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-xs font-semibold bg-emerald-500 hover:bg-emerald-600 text-white py-1.5 rounded transition"
          >
             Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
