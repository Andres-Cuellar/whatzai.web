import { h } from "preact";
import { selectedPlan } from "../context/SelectedPlanContext";

export default function ChoosePlanButton({ plan }: { plan: string }) {
    function handleClick(e: MouseEvent) {
        e.preventDefault();
        selectedPlan.set(plan);
        document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <a
            href="#demo"
            class="btn btn-primary w-full"
            onClick={handleClick}
        >
            Elegir plan
        </a>
    );
}
