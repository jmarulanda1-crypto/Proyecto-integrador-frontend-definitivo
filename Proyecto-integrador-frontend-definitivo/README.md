# Proyecto-integrador-frontend
Grupo conformado por Juliana Marulanda, Santiago Arango, Alex Monroy, Jose Vasquez.
## Descripción del Proyecto

Este es un proyecto integrador frontend que implementa un sistema de autenticación de usuarios con una página principal. La aplicación permite que múltiples usuarios inicien sesión con credenciales específicas y accedan a la página principal del sistema.

## Equipo de Desarrollo

El proyecto fue desarrollado por:

- **Juliana Marulanda** - Desarrollo de la interfaz de login y estilos CSS
- **Santiago Arango** - Lógica de validación y funcionalidades del formulario
- **Alex Monroy** - Arquitectura del proyecto y integración de componentes
- **Jose Vasquez** - Pruebas y optimización del sistema

## Estructura del Proyecto

Proyecto-integrador-frontend-definitivo/
├── login.html          # Página de inicio de sesión
├── login.css           # Estilos de la página de login
├── loguin.js           # Script de validación de credenciales
├── Main.html           # Página principal después del login
└── README.md           # Este archivo
```

## Características

-  Sistema de autenticación seguro
-  Interfaz de usuario limpia y moderna
-  Validación de credenciales en el cliente
- Redirección automática a la página principal
- Mensajes de error personalizados

## Usuarios Disponibles

El sistema incluye los siguientes usuarios autenticados:

| Usuario | Contraseña | Acceso |
| Juliana | 123456    | Permitido |
| Monroy  | 123456    | Permitido |
| Santiago | 123456   | Permitido |
| Jose    | 123456    | Permitido |

**Nota:** Las credenciales son solo para propósitos de demostración.

## Instrucciones de Uso

### 1. Abrir la aplicación

- Abre el archivo `login.html` en tu navegador web

### 2. Iniciar sesión

- Ingresa uno de los usuarios disponibles en el campo "Usuario"
- Ingresa la contraseña correspondiente (123456)
- Haz clic en el botón "Iniciar sesión"

### 3. Acceder a la página principal

- Si las credenciales son correctas, serás redirigido automáticamente a `Main.html`
- Si las credenciales son incorrectas, verás un mensaje de error

##  Descripción de Archivos

### `login.html`
Contiene la estructura HTML de la página de login con:
- Formulario de autenticación
- Campos para usuario y contraseña
- Botón de inicio de sesión

### `login.css`
Proporciona los estilos visuales:
- Diseño centrado y responsive
- Colores modernos (#e9ecef, #fff)
- Sombras y bordes redondeados
- Espaciado consistente

### `loguin.js`
Implementa la lógica de validación:
- Obtiene los valores del formulario
- Valida contra las credenciales almacenadas
- Redirige a `Main.html` si son correctas
- Muestra alerta de error si fallan

### `Main.html`
Página principal después del login que muestra:
- Bienvenida al usuario
- Espacio para futuras funcionalidades

## Tecnologías Utilizadas

- **HTML5** - Estructura y semántica
- **CSS3** - Estilos y diseño responsive
- **JavaScript (Vanilla)** - Lógica de validación
- **DOM API** - Manipulación del Document Object Model

## Funcionalidades Técnicas

### Validación de Login
```javascript
// El script valida múltiples usuarios
if (usuario === "Juliana" && contraseña === "123456") {
    window.location.href = "Main.html";
}
```

### Manejo de Errores
- Mensaje personalizado si el usuario o contraseña son incorrectos
- Validación en el lado del cliente antes de enviar datos
- Alert informativo para el usuario

## Próximas Mejoras

- [ ] Backend de autenticación real
- [ ] Base de datos de usuarios
- [ ] Encriptación de contraseñas
- [ ] Recuperación de contraseña olvidada
- [ ] Validación de formato de entrada
- [ ] Sistema de sesiones
- [ ] Logout funcional
- [ ] Página de perfil de usuario

## Notas de Desarrollo

- El proyecto es completamente funcional en navegadores modernos
- Se recomienda usar la estructura HTML5 correcta
- El CSS es responsive y se adapta a diferentes dispositivos
- El JavaScript utiliza eventos onclick para simplicidad

## Licencia

Este proyecto fue desarrollado como parte de un ejercicio integrador educativo (cesde).

**Última actualización:** Sabado 28 de Marzo del 2026  
**Versión:** Seguna Parte 
**Estado:** Incompleto
