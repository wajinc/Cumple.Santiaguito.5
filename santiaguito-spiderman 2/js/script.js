// Datos de la celebración. Modifica estos valores cuando lo necesites.
const EVENT = {
  title: "Cumpleaños número 5 de Santiaguito",
  childName: "Santiaguito",
  date: "2026-12-06",
  time: "15:00",
  // Zona horaria de Guatemala: UTC-6.
  location: "KM 21.8 Carretera San Pedro Sacatepéquez",
  latitude: 14.679538808790243,
  longitude: -90.61906172109217,
  whatsapp: "50238101477"
};

const $ = (id) => document.getElementById(id);

// Cuenta regresiva: fecha local para evitar desfases por UTC.
function getEventDate() {
  const [year, month, day] = EVENT.date.split("-").map(Number);
  const [hour, minute] = EVENT.time.split(":").map(Number);
  // Convertimos las 15:00 de Guatemala (UTC-6) a un instante UTC.
  return new Date(Date.UTC(year, month - 1, day, hour + 6, minute, 0));
}

function updateCountdown() {
  const now = new Date();
  const difference = getEventDate() - now;
  if (difference <= 0) {
    $("days").textContent = "00";
    $("hours").textContent = "00";
    $("minutes").textContent = "00";
    $("seconds").textContent = "00";
    $("countdown-message").textContent = "¡Hoy es el gran día! ¡Que comience la celebración!";
    return;
  }
  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);
  $("days").textContent = String(days).padStart(2, "0");
  $("hours").textContent = String(hours).padStart(2, "0");
  $("minutes").textContent = String(minutes).padStart(2, "0");
  $("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Ubicación exacta en Google Maps mediante coordenadas.
$("maps-link").href = `https://www.google.com/maps/search/?api=1&query=${EVENT.latitude},${EVENT.longitude}`;

// Confirmación por WhatsApp con código de país de Guatemala (502).
const message = `¡Hola! Confirmo mi asistencia al cumpleaños número 5 de ${EVENT.childName}. ¡Gracias por la invitación!`;
$("whatsapp-link").href = `https://wa.me/${EVENT.whatsapp}?text=${encodeURIComponent(message)}`;

// Crear y descargar un archivo de calendario .ics.
$("calendar-button").addEventListener("click", () => {
  const [year, month, day] = EVENT.date.split("-");
  const [hour, minute] = EVENT.time.split(":");
  // Las 15:00 de Guatemala equivalen a las 21:00 UTC (Guatemala es UTC-6).
  const startLocal = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour) + 6, Number(minute)));
  const endLocal = new Date(startLocal.getTime() + 3 * 60 * 60 * 1000);
  const toICS = (date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Invitacion Santiaguito//ES",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:santiaguito-cumple5-${EVENT.date}@invitacion.local`,
    `DTSTAMP:${toICS(new Date())}`,
    `DTSTART:${toICS(startLocal)}`,
    `DTEND:${toICS(endLocal)}`,
    `SUMMARY:${EVENT.title}`,
    `LOCATION:${EVENT.location.replace(/,/g, "\\,")}`,
    "DESCRIPTION:¡Te esperamos para celebrar con Santiaguito!",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "cumpleanos-santiaguito.ics";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
});

// Galería: si encuentra foto1.jpg, foto2.jpg y foto3.jpg, las muestra.
const gallery = $("gallery");
["foto1.jpg", "foto2.jpg", "foto3.jpg"].forEach((filename, index) => {
  const image = new Image();
  image.src = `assets/images/${filename}`;
  image.alt = `Fotografía ${index + 1} de Santiaguito`;
  image.className = "gallery-photo";
  image.onload = () => {
    const placeholder = gallery.children[index];
    if (placeholder) placeholder.replaceWith(image);
  };
});

document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("background-music");

    music.volume = 0.35;

    // Intentar reproducir automáticamente
    music.play().catch(() => {
        // Si el navegador lo bloquea, esperar interacción
        const startMusic = () => {
            music.play();
            document.removeEventListener("click", startMusic);
        };

        document.addEventListener("click", startMusic);
    });
});