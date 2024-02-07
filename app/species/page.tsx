import { Separator } from "@/components/ui/separator";
import { TypographyH2 } from "@/components/ui/typography";
import { createServerSupabaseClient } from "@/lib/server-utils";
import { redirect } from "next/navigation";
import AddSpeciesDialog from "./add-species-dialog";
import DeleteSpeciesDialog from "./delete-species";
import EditSpeciesDialog from "./edit-species-dialog";
import SpeciesCard from "./species-card";

export default async function SpeciesList() {
  // Create supabase server component client and obtain user session from stored cookie
  const supabase = createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    // this is a protected route - only users who are signed in can view this route
    redirect("/");
  }

  // Obtain the ID of the currently signed-in user
  const sessionId = session.user.id;

  const { data: species } = await supabase.from("species").select("*").order("id", { ascending: false });

  // Obtain species created by the currently signed-in user
  const { data: userSpecies } = await supabase
    .from("species")
    .select("*")
    .eq("author", sessionId)
    .order("id", { ascending: false });

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <TypographyH2>Species List</TypographyH2>
        <div className="flex flex-wrap items-center gap-4">
          <AddSpeciesDialog userId={sessionId} />
          <EditSpeciesDialog userId={sessionId} userSpecies={species} />
          <DeleteSpeciesDialog userId={sessionId} userSpecies={species} />
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-wrap justify-center">
        {species?.map((species) => <SpeciesCard key={species.id} species={species} />)}
      </div>
    </>
  );
}