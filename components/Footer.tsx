import { Separator } from './ui/separator';

export default function Footer() {
  return (
    <footer className="py-8 px-5 sm:px-6 max-w-4xl mx-auto">
      <Separator className="mb-8" />
      <div className="flex justify-between items-center">
        <p className="text-xs text-muted-foreground font-mono">
          &copy; {new Date().getFullYear()} Tanguy Merrien
        </p>
        <p className="text-xs text-muted-foreground">
          Ottawa, Canada
        </p>
      </div>
    </footer>
  );
}
