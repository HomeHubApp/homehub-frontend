import { Fan, Droplets, Snowflake, SunMedium } from "lucide-react";

export default function ACModeComponent() {
    // Keeping the mode list inside the component makes the JSX below easier to read,
    // and also makes it straightforward to swap the active mode later.
    const modes = [
        { label: "Cool", icon: Snowflake, isActive: true },
        { label: "Fan", icon: Fan, isActive: false },
        { label: "Dry", icon: Droplets, isActive: false },
        { label: "Auto", icon: SunMedium, isActive: false },
    ];

    return (
        <div className="px-5 pb-5 ">
            <p className="pb-4 pt-2 text-2xl font-bold">Mode</p>

            {/* The layout wraps on smaller screens so the buttons stay inside the card
                instead of overflowing horizontally. */}
            <div className="flex flex-wrap gap-3 w-full ">
                {modes.map((mode) => {
                    const Icon = mode.icon;

                    return (
                        <button
                            key={mode.label}
                            type="button"
                            className={`flex min-w-[120px] items-center justify-center gap-2 rounded-2xl border px-4 py-4 text-lg font-semibold transition ${
                                mode.isActive
                                    ? "border-amber-400 bg-amber-50 text-amber-600"
                                    : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                            }`}
                            aria-pressed={mode.isActive}
                        >
                            <Icon className="h-5 w-5" />
                            <span>{mode.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
