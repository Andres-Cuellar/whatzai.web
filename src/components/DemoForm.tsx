import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { selectedPlan } from "../context/SelectedPlanContext";

export default function DemoForm() {
  const plan = useStore(selectedPlan);

  function handleChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    selectedPlan.set(target.value || null); // Actualiza el store si el usuario cambia el select
  }

  console.log('plan', selectedPlan);

  const handleSubmitForm = async (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://apiai.glumpstudio.com/webhook/4b8596f8-c80c-4306-8693-c89dbd9e2321",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // mode: 'no-cors',
          body: JSON.stringify(data),
        }
      );

      console.log("response", response);

      if (response.ok) {
        window.location.href = "/gracias";
      } else {
        alert("Error al enviar los datos.");
      }
    } catch (error) {
      console.error(error);
      alert("Error en el envío. Inténtalo de nuevo.");
    }
  };

  return (
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          ¿Listo para impulsar tus ventas?
        </h2>
        <p class="text-xl text-gray-600">
          Solicita una demo personalizada o comienza ahora mismo
        </p>
      </div>

      <form
        id="demo-form"
        method="POST"
        class="bg-white rounded-2xl shadow-custom p-8"
        onSubmit={handleSubmitForm}
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="nombre"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label
              htmlFor="empresa"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Empresa
            </label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
              placeholder="Nombre de tu empresa"
            />
          </div>
        </div>

        <div class="mb-6">
          <label
            htmlFor="email"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Email empresarial
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
            placeholder="tu@empresa.com"
          />
        </div>

        <div class="mb-6">
          <label
            htmlFor="telefono"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
            placeholder="+57 300 123 4567"
          />
        </div>

        <div class="mb-6">
          <label htmlFor="plan" class="block text-sm font-medium text-gray-700 mb-2">
            Plan (opcional)
          </label>
          <select
            id="plan"
            name="plan"
            value={plan ?? ""}
            onChange={handleChange}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-secondary focus:border-secondary"
          >
            <option value="">-- Selecciona un plan --</option>
            <option value="Starter 5">Starter 5</option>
            <option value="Growth 10">Growth 10</option>
            <option value="Scale Ilimitado">Scale Ilimitado</option>
          </select>
        </div>

        <div class="mb-6">
          <label
            htmlFor="mensaje"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            ¿Qué te gustaría lograr con WhatzAI?
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
            placeholder="Cuéntanos tus objetivos..."
          />
        </div>

        <div class="flex flex-col md:flex-row gap-4">
          <button type="submit" class="btn btn-secondary flex-1"
          >
            Solicitar demo gratuita
          </button>
          <a href="#planes" class="btn btn-primary flex-1">
            Contratar ahora
          </a>
        </div>
      </form>
    </div>


  );
}
