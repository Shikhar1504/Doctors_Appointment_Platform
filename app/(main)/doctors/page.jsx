import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SPECIALTIES } from "@/lib/specialities";

export default async function DoctorsPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-8 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">Find Your Doctor</h1>
        <p className="text-muted-foreground text-lg">
          Browse by specialty or view all available healthcare providers
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {SPECIALTIES.map((specialty) => (
          <Link key={specialty.name} href={`/doctors/${specialty.name}`} className="group">
            <Card className="hover:border-primary/50 transition-all cursor-pointer h-full shadow-md">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <div className="text-primary group-hover:text-primary-foreground">{specialty.icon}</div>
                </div>
                <h3 className="font-medium text-foreground">{specialty.name}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
