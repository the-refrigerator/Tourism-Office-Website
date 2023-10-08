export default function createUrl(planetId, hotspotId) {
  //window.location.href.split("?")[0]
  return "/?" + (planetId >= 0 ? "planet=" + planetId : "") + (planetId >= 0 && hotspotId >= 0 ? "&hotspot=" + hotspotId : "");
}
