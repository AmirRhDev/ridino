import LogoutButton from "@/components/common/logout-button";
import ToggleTheme from "@/components/common/toggle-theme";

function Setting() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-xl text-foreground">تم اپلیکیشن</h2>
        <ToggleTheme withLabel />
      </div>

      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-xl text-foreground">
          خروج از حساب کاربری
        </h2>
        <LogoutButton className="w-24" />
      </div>
    </div>
  );
}

export default Setting;
