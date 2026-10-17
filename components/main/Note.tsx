import {SITE} from "@/constants/site";

const Note = () => {
  return (
    <section id="note" className="shell mt-24 sm:mt-32">
      <h2 className="border-b border-line pb-4 text-sm font-medium text-muted">
        Note
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-10">
        <div className="space-y-5 lg:col-span-7">
          {SITE.note.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="max-w-[62ch] text-[1.0625rem] leading-[1.7] text-ink"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="space-y-6 border-t border-line pt-6 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:pt-0">
          {SITE.stack.map((group) => (
            <div key={group.label}>
              <dt className="text-sm text-faint">{group.label}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-ink">
                {group.items.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Note;
