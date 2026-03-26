export default function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="flex flex-col items-start text-left border rounded-2xl border-gray-200 p-8 hover:border-highlightedText hover:translate-y-2 hover:shadow-xl transition-all duration-300 bg-surface group">

      {/* icon section */}
      <div className="mb-6 bg-blue-50 p-4 rounded-2xl group-hover:bg-highlightedText transition-all duration-300 text-primaryText">
        <Icon className="h-14 w-14 group-hover:text-surface transition-all duration-300 text-highlightedText" strokeWidth={2} />
      </div>

      {/* Card Elements */}
      <h3 className="text-xl font-bold text-primaryText mb-4">{title}</h3>
      <p className=" text-secondaryText leading-relaxed text-sm md:text-base">
        {desc}
      </p>
    </div>
  );
}
