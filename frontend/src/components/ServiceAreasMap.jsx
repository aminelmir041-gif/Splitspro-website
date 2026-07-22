import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, CircleMarker, Circle, Tooltip } from "react-leaflet";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import "leaflet/dist/leaflet.css";

const BASE = { name: "Bass Hill", pos: [-33.9018, 150.9905], hq: true };
const SUBURBS = [
  { name: "Bankstown", pos: [-33.9171, 151.0349] },
  { name: "Chester Hill", pos: [-33.8880, 150.9970] },
  { name: "Condell Park", pos: [-33.9160, 151.0090] },
  { name: "Greenacre", pos: [-33.9060, 151.0560] },
  { name: "Guildford", pos: [-33.8560, 150.9870] },
  { name: "Granville", pos: [-33.8330, 151.0110] },
  { name: "Regents Park", pos: [-33.8840, 151.0230] },
  { name: "Sefton", pos: [-33.8880, 151.0130] },
  { name: "Panania", pos: [-33.9560, 151.0000] },
  { name: "Revesby", pos: [-33.9500, 151.0150] },
  { name: "Woodcroft", pos: [-33.7570, 150.8760] },
  { name: "Oran Park", pos: [-34.0090, 150.7430] },
];

const NAVY = "#1E3A8A";
const LIGHT = "#3B82F6";

const SubTip = ({ name }) => (
  <Tooltip direction="top" offset={[0, -6]} opacity={1} className="sp-map-tip">
    <span className="block font-semibold">{name}</span>
    <span className="block text-[11px] opacity-80">Split-system and ducted services available.</span>
  </Tooltip>
);

export const ServiceAreasMap = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      data-testid="service-map-wrap"
    >
      <div className="overflow-hidden rounded-2xl border border-[#E5E5EA] shadow-[0_16px_50px_rgba(11,31,58,0.10)]">
        <MapContainer
          center={BASE.pos}
          zoom={11}
          scrollWheelZoom={false}
          className="h-[440px] w-full md:h-[520px]"
          data-testid="service-map"
          style={{ background: "#EAEFF5" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a> &copy; OpenStreetMap contributors'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <Circle center={BASE.pos} radius={11000} pathOptions={{ color: NAVY, weight: 1.5, fillColor: LIGHT, fillOpacity: 0.08 }} />

          {ready && SUBURBS.map((s, i) => (
            <CircleMarker
              key={s.name}
              center={s.pos}
              radius={7}
              pathOptions={{ color: "#fff", weight: 2, fillColor: LIGHT, fillOpacity: 0.95 }}
              className="sp-marker"
              data-testid={`map-marker-${i}`}
            >
              <SubTip name={s.name} />
            </CircleMarker>
          ))}

          {/* Home base */}
          <CircleMarker
            center={BASE.pos}
            radius={11}
            pathOptions={{ color: "#fff", weight: 3, fillColor: NAVY, fillOpacity: 1 }}
            data-testid="map-marker-base"
          >
            <Tooltip direction="top" offset={[0, -8]} opacity={1} permanent className="sp-map-tip sp-map-tip-hq">
              <span className="block font-semibold">Bass Hill — Splits Pro HQ</span>
              <span className="block text-[11px] opacity-80">Our home base</span>
            </Tooltip>
          </CircleMarker>
        </MapContainer>
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[#6E6E73]">
          <MapPin className="mr-1 inline h-4 w-4 text-[#1E3A8A]" />
          Nearby suburb not listed? Contact us to confirm availability.
        </p>
        <Link
          to="/contact"
          data-testid="check-suburb-btn"
          className="inline-flex items-center gap-2 rounded-md bg-[#1E3A8A] px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-transform duration-300 hover:scale-[1.02]"
        >
          Check Your Suburb <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceAreasMap;
