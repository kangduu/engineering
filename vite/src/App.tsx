import { Button, Input } from "antd";
import { useState } from "react";

const App = () => {
  const [type, setType] = useState("password");
  return (
    <div className="App">
      <Input placeholder="Basic usage" type={type} />
      <Button
        onClick={() => setType(type === "password" ? "text" : "password")}
      >
        {type === "password" ? "显示密码" : "隐藏密码"}
      </Button>
    </div>
  );
};

export default App;
