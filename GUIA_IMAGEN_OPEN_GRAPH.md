# 📸 Guía: Imagen Open Graph para Redes Sociales

## ✅ **ESPECIFICACIONES TÉCNICAS**

### **Medidas Recomendadas:**

- **Tamaño:** `1200 x 630 píxeles` (o `1200 x 628px`)
- **Proporción:** `1.91:1` (ancho:alto)
- **Tamaño de archivo:** Máximo 8MB (recomendado: menos de 1MB)

### **Formato:**

- ✅ **PNG** (recomendado) - Soporta transparencia
- ✅ **JPG/JPEG** - Buena compresión, sin transparencia
- ⚠️ **WebP** - Funciona pero algunos servicios pueden no soportarlo bien

### **Ubicación:**

- ✅ **Debe estar en:** `public/og-image.png` (o `public/og-image.jpg`)
- ✅ **Ya está configurado en:** `src/config.yaml`

---

## 🎨 **DISEÑO RECOMENDADO**

### **Elementos que debe incluir:**

1. **Logo de SINDACATO ASEU** (centrado o a la izquierda)
2. **Texto principal:** "SINDACATO ASEU"
3. **Subtítulo:** "Associazione Sindacale Europea Universale"
4. **Tagline:** "CAF e Patronato - Milano"
5. **Color de fondo:** Verde ASEU (#0fbe7c) o blanco/gris claro
6. **Información de contacto:** Teléfono o email (opcional)

### **Ejemplo de Layout:**

```
┌─────────────────────────────────────┐
│                                     │
│         [LOGO ASEU]                 │
│                                     │
│    SINDACATO ASEU               │
│                                     │
│  Associazione Sindacale Europea     │
│         Universale                   │
│                                     │
│      CAF e Patronato - Milano       │
│                                     │
│    📞 02.2592773 | 📧 info@...      │
│                                     │
└─────────────────────────────────────┘
```

---

## 📋 **PASOS PARA CREAR LA IMAGEN**

### **Opción 1: Usando Canva (Recomendado)**

1. Ve a [canva.com](https://www.canva.com)
2. Crea un diseño personalizado: `1200 x 630 px`
3. Agrega el logo de ASEU
4. Agrega el texto con la fuente "Titillium Web" (si está disponible)
5. Usa el color verde #0fbe7c
6. Exporta como PNG o JPG
7. Guarda en `public/og-image.png`

### **Opción 2: Usando Photoshop/GIMP**

1. Crea un nuevo documento: `1200 x 630 px`
2. Resolución: 72 DPI (suficiente para web)
3. Agrega el logo y texto
4. Exporta como PNG o JPG
5. Guarda en `public/og-image.png`

### **Opción 3: Usando herramientas online**

- [Social Share Preview](https://socialsharepreview.com/)
- [Meta Tags](https://metatags.io/)
- [Open Graph Image Generator](https://www.opengraph.xyz/)

---

## 🔧 **CONFIGURACIÓN ACTUAL**

Ya está configurado en `src/config.yaml`:

```yaml
openGraph:
  site_name: SINDACATO ASEU
  images:
    - url: '/og-image.png'
      width: 1200
      height: 630
  type: website
```

**Solo necesitas:**

1. Crear la imagen con las especificaciones arriba
2. Guardarla como `public/og-image.png` (o `.jpg`)
3. ¡Listo! Se usará automáticamente

---

## ✅ **VERIFICACIÓN**

### **Después de crear la imagen, verifica:**

1. **Facebook Debugger:**
   - Ve a: https://developers.facebook.com/tools/debug/
   - Ingresa: `https://www.sindacatoaseu.it`
   - Haz clic en "Scrape Again"
   - Verifica que la imagen aparezca correctamente

2. **Twitter Card Validator:**
   - Ve a: https://cards-dev.twitter.com/validator
   - Ingresa tu URL
   - Verifica el preview

3. **LinkedIn Post Inspector:**
   - Ve a: https://www.linkedin.com/post-inspector/
   - Ingresa tu URL
   - Verifica el preview

4. **WhatsApp:**
   - Comparte el link en WhatsApp
   - Verifica que la imagen aparezca

---

## 📱 **CÓMO SE VE EN CADA RED SOCIAL**

### **Facebook:**

- Muestra la imagen completa (1200x630)
- Título y descripción debajo

### **Twitter:**

- Muestra la imagen completa
- Título y descripción debajo
- Usa `summary_large_image` (ya configurado)

### **LinkedIn:**

- Muestra la imagen completa
- Título y descripción debajo

### **WhatsApp:**

- Muestra la imagen completa
- Título y descripción debajo

---

## 💡 **CONSEJOS PROFESIONALES**

1. **Texto legible:** Usa fuentes grandes y contrastadas
2. **Logo visible:** Asegúrate que el logo sea claro
3. **Colores de marca:** Usa el verde ASEU (#0fbe7c)
4. **Espacio en blanco:** No satures la imagen
5. **Versión mobile:** Considera que también se verá en móviles
6. **Actualiza periódicamente:** Cambia la imagen si hay eventos especiales

---

## 🚀 **IMÁGENES POR PÁGINA (OPCIONAL)**

Si quieres imágenes diferentes por página, puedes agregar en cada página:

```astro
---
const metadata = {
  title: 'Servizi — SINDACATO ASEU',
  openGraph: {
    images: [
      {
        url: '/og-image-servizi.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};
---
```

---

## 📝 **RESUMEN RÁPIDO**

✅ **Medidas:** 1200 x 630 px  
✅ **Formato:** PNG o JPG  
✅ **Ubicación:** `public/og-image.png`  
✅ **Ya configurado:** Sí, en `src/config.yaml`  
✅ **Solo falta:** Crear la imagen y guardarla

---

**¿Necesitas ayuda para crear la imagen?** Puedo ayudarte con el diseño o recomendarte herramientas específicas. 🎨
