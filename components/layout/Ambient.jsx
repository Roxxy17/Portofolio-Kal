import FlickeringGrid from "@/components/primitives/FlickeringGrid";
import DriftingIcons from "@/components/primitives/DriftingIcons";

// Lapisan latar untuk seluruh halaman. Semuanya tembus klik dan berada
// di belakang isi, jadi tidak pernah menghalangi interaksi.
const Ambient = () => (
  <>
    {/* Kisi berkedip. Tingginya dibatasi 620px karena mask memang sudah
        menghabiskannya di situ, jadi tidak ada sel yang digambar percuma. */}
    <FlickeringGrid
      className="pointer-events-none fixed inset-x-0 top-0 -z-20 h-[620px] [mask-image:linear-gradient(to_bottom,white,transparent_85%)]"
      maxOpacity={0.16}
      gridGap={14}
    />

    <DriftingIcons />
  </>
);

export default Ambient;
