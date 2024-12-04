import Lower from "./lower";
import Upper from "./upper";

export default function Footer() {
    return (
        <div className="flex flex-col gap-6">
            <Upper/>
            <div className="w-[100%] text-center h-[1px] bg-[#E6CFFF] px-8"></div>
            <Lower/>
        </div>
    )
}
