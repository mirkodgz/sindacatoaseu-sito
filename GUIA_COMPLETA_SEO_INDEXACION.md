# 🔍 Guía Completa SEO e Indexación - SINDACATO ASEU

## ✅ **CONFIGURACIÓN ACTUAL**

### **Ya Implementado:**

- ✅ Sitemap automático (`@astrojs/sitemap`)
- ✅ Robots.txt básico
- ✅ Google Site Verification configurado
- ✅ Meta tags optimizados
- ✅ Schema.org structured data
- ✅ Open Graph tags
- ✅ Keywords meta tags

---

## 🎯 **1. INDEXACIÓN CON GOOGLE**

### **A. Google Search Console (PRIORIDAD ALTA)**

#### **Paso 1: Verificar Propiedad del Sitio**

1. Ve a: https://search.google.com/search-console
2. Agrega tu propiedad: `https://www.sindacatoaseu.it`
3. Método de verificación:
   - **Opción 1 (Recomendada):** Meta tag HTML
     - Ya tienes el código en `config.yaml`: `orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M`
     - Verifica que aparezca en el `<head>` de tu sitio
   - **Opción 2:** Archivo HTML
     - Sube un archivo `google-site-verification.html` a `public/`
   - **Opción 3:** DNS
     - Agrega registro TXT en tu DNS

#### **Paso 2: Enviar Sitemap**

1. En Google Search Console, ve a **Sitemaps**
2. Agrega tu sitemap: `https://www.sindacatoaseu.it/sitemap-index.xml`
3. También puedes agregar:
   - `https://www.sindacatoaseu.it/sitemap-0.xml`
   - `https://www.sindacatoaseu.it/sitemap.xml` (si existe)

#### **Paso 3: Solicitar Indexación Manual (Inicial)**

1. En Google Search Console, ve a **Inspección de URL**
2. Ingresa cada página importante:
   - `https://www.sindacatoaseu.it/`
   - `https://www.sindacatoaseu.it/servizi`
   - `https://www.sindacatoaseu.it/caf-patronato`
   - `https://www.sindacatoaseu.it/contatti`
   - etc.
3. Haz clic en **"Solicitar indexación"** para cada una

---

## 📄 **2. SITEMAP.XML**

### **Configuración Actual:**

Tu sitio usa `@astrojs/sitemap` que genera automáticamente:

- `sitemap-index.xml` (índice principal)
- `sitemap-0.xml`, `sitemap-1.xml`, etc. (sitemaps individuales)

### **Ubicación:**

- Se genera en: `dist/sitemap-index.xml` después del build
- URL pública: `https://www.sindacatoaseu.it/sitemap-index.xml`

### **Verificación:**

Después del deploy, verifica que el sitemap sea accesible:

```bash
curl https://www.sindacatoaseu.it/sitemap-index.xml
```

### **Optimización del Sitemap:**

El sitemap incluye automáticamente:

- ✅ Todas las páginas estáticas
- ✅ Todas las páginas dinámicas (servizi, caf, csu)
- ✅ Páginas del blog (si están indexadas)

### **Excluir Páginas del Sitemap:**

Si quieres excluir páginas (ej: blog de ejemplo), puedes hacerlo en `astro.config.ts`:

```typescript
sitemap({
  filter: (page) => {
    // Excluir páginas del blog de ejemplo
    return (
      !page.includes('/blog/') ||
      page.includes('/servizi/') ||
      page.includes('/caf-patronato/') ||
      page.includes('/centro-servizi-csu/')
    );
  },
});
```

---

## 🤖 **3. ROBOTS.TXT**

### **Archivo Actual:**

```
User-agent: *
Disallow:
```

### **Versión Optimizada Recomendada:**

```
User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.sindacatoaseu.it/sitemap-index.xml

# Excluir páginas de ejemplo del blog (opcional)
Disallow: /blog/
Disallow: /category/
Disallow: /tag/

# Permitir páginas importantes
Allow: /servizi/
Allow: /caf-patronato/
Allow: /centro-servizi-csu/
```

### **Bots Específicos:**

```
# Google
User-agent: Googlebot
Allow: /

# Bing
User-agent: Bingbot
Allow: /

# Otros bots
User-agent: *
Allow: /

Sitemap: https://www.sindacatoaseu.it/sitemap-index.xml
```

---

## 🔍 **4. META TAGS Y SEO TÉCNICO**

### **A. Meta Tags Esenciales (Ya Implementados):**

```html
<!-- Title -->
<title>SINDACATO ASEU – Associazione Sindacale Europea Universale</title>

<!-- Description -->
<meta name="description" content="Sindacato, CAF e Patronato a Milano..." />

<!-- Keywords -->
<meta name="keywords" content="sindacato milano, CAF milano..." />

<!-- Robots -->
<meta name="robots" content="index, follow" />

<!-- Canonical -->
<link rel="canonical" href="https://www.sindacatoaseu.it/" />

<!-- Open Graph -->
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://www.sindacatoaseu.it/og-image.jpg" />
<meta property="og:url" content="https://www.sindacatoaseu.it/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="SINDACATO ASEU" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="https://www.sindacatoaseu.it/og-image.jpg" />
```

### **B. Meta Tags Adicionales Recomendados:**

```html
<!-- Idioma -->
<meta http-equiv="content-language" content="it" />

<!-- Autor -->
<meta name="author" content="SINDACATO ASEU" />

<!-- Geo Tags (Local SEO) -->
<meta name="geo.region" content="IT-LO" />
<meta name="geo.placename" content="Milano" />
<meta name="geo.position" content="45.5019;9.2314" />
<meta name="ICBM" content="45.5019, 9.2314" />

<!-- Revisit -->
<meta name="revisit-after" content="7 days" />

<!-- Distribution -->
<meta name="distribution" content="global" />

<!-- Rating -->
<meta name="rating" content="general" />
```

---

## 📊 **5. ESTRUCTURA DE DATOS (SCHEMA.ORG)**

### **Ya Implementado:**

✅ **Organization Schema** - En `src/components/common/StructuredData.astro`
✅ **LocalBusiness Schema** - En `src/components/common/StructuredData.astro`

### **Schemas Adicionales Recomendados:**

#### **A. Service Schema (Para cada servicio):**

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Consulenza Legale",
  "provider": {
    "@type": "Organization",
    "name": "SINDACATO ASEU",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Mario Pieri, 2",
      "addressLocality": "Milano",
      "postalCode": "20127",
      "addressCountry": "IT"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Milano"
  }
}
```

#### **B. BreadcrumbList Schema:**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.sindacatoaseu.it/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Servizi",
      "item": "https://www.sindacatoaseu.it/servizi"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Consulenza Legale",
      "item": "https://www.sindacatoaseu.it/servizi/consulenza-legale"
    }
  ]
}
```

#### **C. FAQPage Schema (Si agregas FAQ):**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Come posso contattare il sindacato?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puoi contattarci al telefono 02.2592773 o via email a info@sindacatoaseu.it"
      }
    }
  ]
}
```

---

## 🚀 **6. OPTIMIZACIÓN DE PÁGINAS**

### **A. Estructura de URLs:**

✅ **Ya optimizado:**

- URLs limpias y descriptivas
- Sin parámetros innecesarios
- HTTPS (cuando esté en producción)

### **B. Headers HTTP (Para el servidor):**

Asegúrate que tu servidor envíe:

```
X-Robots-Tag: index, follow
Content-Language: it
```

### **C. Velocidad de Carga:**

✅ **Ya optimizado:**

- Astro genera HTML estático (muy rápido)
- Imágenes optimizadas
- CSS/JS minificados

### **D. Mobile-First:**

✅ **Ya implementado:**

- Diseño responsive
- Viewport configurado
- Touch-friendly

---

## 📈 **7. MONITOREO Y ANÁLISIS**

### **A. Google Search Console - Métricas Clave:**

1. **Cobertura:**
   - Páginas válidas indexadas
   - Errores de indexación
   - Advertencias

2. **Rendimiento:**
   - Impresiones
   - Clics
   - CTR (Click-Through Rate)
   - Posición promedio

3. **Keywords:**
   - Qué palabras clave traen tráfico
   - Posición de cada keyword
   - Oportunidades de mejora

### **B. Google Analytics 4:**

Configura GA4 en `config.yaml`:

```yaml
analytics:
  vendors:
    googleAnalytics:
      id: 'G-XXXXXXXXXX' # Tu ID de GA4
```

### **C. Herramientas de Verificación:**

1. **Google Rich Results Test:**
   - https://search.google.com/test/rich-results
   - Verifica Schema.org

2. **PageSpeed Insights:**
   - https://pagespeed.web.dev/
   - Verifica velocidad

3. **Mobile-Friendly Test:**
   - https://search.google.com/test/mobile-friendly
   - Verifica mobile

4. **Structured Data Testing Tool:**
   - https://validator.schema.org/
   - Verifica Schema.org

---

## 🎯 **8. ESTRATEGIA DE INDEXACIÓN**

### **Fase 1: Indexación Inicial (Primera Semana)**

1. ✅ Verificar propiedad en Google Search Console
2. ✅ Enviar sitemap
3. ✅ Solicitar indexación manual de páginas principales:
   - Homepage
   - Servizi (índice)
   - CAF e Patronato (índice)
   - Centro Servizi CSU (índice)
   - Contatti
   - Chi Siamo

### **Fase 2: Indexación de Contenido (Primeras 2-4 Semanas)**

1. Google indexará automáticamente las páginas del sitemap
2. Monitorear en Search Console:
   - Qué páginas están indexadas
   - Errores de indexación
   - Advertencias

### **Fase 3: Optimización Continua (Ongoing)**

1. Monitorear métricas semanalmente
2. Optimizar páginas con bajo rendimiento
3. Agregar contenido nuevo regularmente
4. Actualizar sitemap cuando sea necesario

---

## 🔧 **9. CHECKLIST DE INDEXACIÓN**

### **Pre-Deploy:**

- [x] Sitemap configurado
- [x] Robots.txt optimizado
- [x] Meta tags completos
- [x] Schema.org implementado
- [x] Google Site Verification configurado
- [x] Open Graph image creada
- [x] Canonical URLs configurados
- [x] Keywords optimizados

### **Post-Deploy:**

- [ ] Verificar propiedad en Google Search Console
- [ ] Enviar sitemap a Google
- [ ] Solicitar indexación de páginas principales
- [ ] Verificar que sitemap sea accesible
- [ ] Verificar que robots.txt sea accesible
- [ ] Configurar Google Analytics 4
- [ ] Verificar Schema.org con Rich Results Test
- [ ] Verificar velocidad con PageSpeed Insights
- [ ] Verificar mobile-friendly

### **Mantenimiento Mensual:**

- [ ] Revisar métricas en Search Console
- [ ] Verificar errores de indexación
- [ ] Optimizar páginas con bajo rendimiento
- [ ] Actualizar contenido
- [ ] Revisar keywords que traen tráfico
- [ ] Optimizar meta descriptions si es necesario

---

## 📝 **10. COMANDOS ÚTILES**

### **Verificar Sitemap Localmente:**

```bash
# Después del build
cat dist/sitemap-index.xml
```

### **Verificar Robots.txt:**

```bash
cat public/robots.txt
```

### **Verificar Meta Tags:**

```bash
# En el navegador, inspeccionar elemento <head>
# O usar herramientas online
```

### **Solicitar Re-indexación (Google Search Console):**

1. Ve a "Inspección de URL"
2. Ingresa la URL
3. Haz clic en "Solicitar indexación"

---

## 🎓 **11. MEJORES PRÁCTICAS**

### **DO (Hacer):**

✅ Crear contenido único y de calidad
✅ Usar keywords naturalmente
✅ Mantener estructura de URLs limpia
✅ Optimizar imágenes (alt text, tamaño)
✅ Mantener velocidad de carga alta
✅ Actualizar contenido regularmente
✅ Monitorear métricas regularmente
✅ Usar Schema.org structured data
✅ Crear enlaces internos relevantes

### **DON'T (No Hacer):**

❌ Keyword stuffing (sobre-optimizar)
❌ Contenido duplicado
❌ Cloaking (mostrar contenido diferente a bots)
❌ Enlaces spam
❌ Contenido de baja calidad
❌ Ignorar errores de indexación
❌ Cambiar URLs frecuentemente
❌ Bloquear bots en robots.txt sin razón

---

## 🚨 **12. PROBLEMAS COMUNES Y SOLUCIONES**

### **Problema: Páginas no se indexan**

**Soluciones:**

1. Verificar que `robots: index: true` en config
2. Verificar que no estén bloqueadas en robots.txt
3. Solicitar indexación manual en Search Console
4. Verificar que el sitemap incluya las páginas
5. Verificar que las páginas sean accesibles

### **Problema: Errores en Search Console**

**Soluciones:**

1. Revisar errores específicos
2. Corregir problemas técnicos
3. Solicitar re-indexación después de corregir
4. Monitorear que los errores desaparezcan

### **Problema: Bajo CTR (Click-Through Rate)**

**Soluciones:**

1. Mejorar meta descriptions
2. Optimizar títulos (H1)
3. Usar palabras clave en títulos
4. Agregar rich snippets (Schema.org)
5. Mejorar contenido de la página

---

## 📊 **13. MÉTRICAS DE ÉXITO**

### **KPIs a Monitorear:**

1. **Indexación:**
   - Número de páginas indexadas
   - Tasa de indexación (indexadas/totales)

2. **Tráfico Orgánico:**
   - Impresiones
   - Clics
   - CTR
   - Posición promedio

3. **Keywords:**
   - Número de keywords que rankean
   - Posición promedio
   - Keywords en top 10

4. **Conversiones:**
   - Clics en WhatsApp
   - Formularios enviados
   - Llamadas telefónicas

---

## 🎯 **14. PLAN DE ACCIÓN INMEDIATO**

### **Esta Semana:**

1. [ ] Verificar propiedad en Google Search Console
2. [ ] Enviar sitemap
3. [ ] Solicitar indexación de 5-10 páginas principales
4. [ ] Configurar Google Analytics 4
5. [ ] Verificar que sitemap sea accesible públicamente

### **Este Mes:**

1. [ ] Monitorear indexación semanalmente
2. [ ] Optimizar páginas con bajo rendimiento
3. [ ] Agregar Schema.org adicional (Service, BreadcrumbList)
4. [ ] Crear contenido nuevo (blog posts opcionales)
5. [ ] Optimizar meta descriptions basado en datos

### **Próximos 3 Meses:**

1. [ ] Analizar keywords que traen tráfico
2. [ ] Optimizar contenido para keywords principales
3. [ ] Crear más contenido relevante
4. [ ] Mejorar enlaces internos
5. [ ] Monitorear y mejorar continuamente

---

## 📚 **15. RECURSOS ADICIONALES**

### **Documentación Oficial:**

- Google Search Central: https://developers.google.com/search
- Schema.org: https://schema.org/
- Google Search Console Help: https://support.google.com/webmasters

### **Herramientas:**

- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com
- PageSpeed Insights: https://pagespeed.web.dev
- Rich Results Test: https://search.google.com/test/rich-results
- Schema Validator: https://validator.schema.org

---

## ✅ **RESUMEN**

Tu sitio ya tiene una **base sólida de SEO**:

✅ Sitemap automático
✅ Robots.txt configurado
✅ Meta tags optimizados
✅ Schema.org structured data
✅ Open Graph tags
✅ Keywords optimizados
✅ Google Site Verification

**Próximos pasos críticos:**

1. **Verificar en Google Search Console** (5 minutos)
2. **Enviar sitemap** (2 minutos)
3. **Solicitar indexación inicial** (10 minutos)
4. **Configurar Google Analytics** (5 minutos)

**Tiempo total: ~20 minutos para configuración inicial**

---

**¿Necesitas ayuda con algún paso específico?** Puedo ayudarte a implementar cualquier mejora adicional. 🚀
