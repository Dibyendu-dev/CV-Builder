import { TemplateClassic } from "../templete/TempleteClassic";
import { TemplateCompact } from "../templete/TempleteCompact";
import { TemplateModern } from "../templete/TempleteModern";
import { TemplateSidebar } from "../templete/TempleteSidebar";
import { TemplateTimeline } from "../templete/TempleteTimeline";

export function CVPreview({ template, orderedData }) {
  switch (template) {
    case 0:
      return <TemplateClassic {...orderedData} />;
    case 1:
      return <TemplateModern {...orderedData} />;
    case 2:
      return <TemplateCompact {...orderedData} />;
    case 3:
      return <TemplateSidebar {...orderedData} />;
    case 4:
      return <TemplateTimeline {...orderedData} />;
    default:
      return <TemplateClassic {...orderedData} />;
  }
}
