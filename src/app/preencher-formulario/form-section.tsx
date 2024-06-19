export interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({ title, children }) => (
  <section className="flex flex-col items-center justify-center w-full">
    <h3 className="text-white text-xl">{title}</h3>
    {children}
  </section>
);