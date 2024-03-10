import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { JotaiPerson } from "./state-management/providers/jotai";
import { MobxPerson } from "./state-management/providers/mobx";
import { ValtioPerson } from "./state-management/providers/valtio";
import { ZustandPerson } from "./state-management/providers/zustand";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-16 bg-cyan-900 text-black w-full dark gap-4">
      <label className={"text-lg font-bold text-white"}>
        React 生态状态管理库对比
      </label>

      <Card>
        <CardHeader>
          <CardTitle>Zustand</CardTitle>
          <CardDescription>
            {"zustand 是典型的自顶向下的状态管理库，是 redux 的延伸与简化，基于 zustand 可以让代码有很好的高内聚的闭包特性。\n\n" +
              "\n" +
              "zustand 本身不支持类变量的操作，但通过深一层能变相地实现计算属性的效果。\n\n" +
              "\n" +
              "zustand 的缺点：\n" +
              "1. 原子 set 写起来比较冗余，比不上 jotai（谁也比不过）\n" +
              "2. 涉及到 immer 场景较多的话不如直接用 valtio\n" +
              "\n" +
              "zustand 非常通用与流行，未来也必将超过redux的旧霸主地位，新手友好。"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ZustandPerson />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Jotai</CardTitle>
          <CardDescription>
            {"jotai 是极简的、典型的自底向上的状态管理库，在原子级别的状态管理上绝对是一把瑞士军刀，毫无悬念。\n" +
              "\n" +
              "jotai 最合适的业务场景是有许多精细化参数的开发平台，例如 IDE 之类，流行的画板协同开源软件 affine 的业务代码使用了 jotai。\n" +
              "\n" +
              "但 jotai 的驾驭要求比较高，需要足够的细心，理论上所有场景都可以用 jotai 去解构，但部分场景结合使用其他状态库可能会使开发效率以及可维护性更高。\n" +
              "\n" +
              "我说的可维护性，尤其是指状态之间有较多耦合和勾稽关系的，他们更适合作为一个分子单位使用自上而下的管理手段。\n" +
              "\n" +
              "显然，jotai 不支持基于类对象创建实体，也希望用户尽量对实体进行拆分，然后多多使用 derive 的技术，有可能会引起链式灾难。\n" +
              "\n" +
              "高手必备。"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <JotaiPerson />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Valtio</CardTitle>

          <CardDescription>
            {"valtio 基于 proxy 模式，最大的优点是 object native 的，它可以直接操作对象，这在很多场景下是一把极快的剃刀。\n" +
              "\n" +
              "但值得警惕的是，这种设计原则，与 react 重视数据流动方向的理念并不一致，因此长期看必然不会受到最主流群体的推崇。\n" +
              "\n" +
              "但它在自顶向下、自底向上的两种主流范式里确实基于 mutable 的特性，让它独具一格。\n" +
              "\n" +
              "在我进行了类对象实体的状态管理库对比里，valtio 得到了绝对的胜利，并且另一款老牌库 mobx 也黯然失色。\n" +
              "\n" +
              "终上，如果你需要一个较为复杂、经常修改的实体对象，并且希望能直接以 class 那种写法进行初始化，valtio 能让你的效率达到最高。\n" +
              "\n" +
              "但 valtio 的缺点也很明显，过于灵活的 proxy 修改容易让后期维护相当头疼，另外，this 问题在 valtio 里也不够干净，至少需要引用原 proxy 对象。\n"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ValtioPerson />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mobx</CardTitle>
        </CardHeader>

        <CardContent>
          <MobxPerson />
        </CardContent>
      </Card>
    </main>
  );
}
