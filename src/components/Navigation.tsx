import { ReactNode } from "react";

type NavigationProps = {
  segments: {
    id: string;
    label: string;
    icon?: ReactNode;
  }[];
  activeId: string;
  onSelect: (id: string) => void;
};

function Navigation({ segments, activeId, onSelect }: NavigationProps) {
  return (
    <div className="flex justify-center mb-4">
      <div className="flex rounded-full bg-gray-800 p-1">
        {segments.map((segment) => (
          <button
            key={segment.id}
            onClick={() => onSelect(segment.id)}
            className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center ${
              activeId === segment.id
                ? "bg-gray-700 text-white font-medium"
                : "text-gray-400 hover:text-gray-300"
            }`}
            data-testid={`nav-${segment.id}`}
          >
            {segment.icon && <span className="mr-2">{segment.icon}</span>}
            {segment.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navigation;