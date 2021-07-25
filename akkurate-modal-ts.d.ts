import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const AkkurateModalTs: { install: InstallFunction };
export default AkkurateModalTs;

export const AkkurateModalTsSample: VueConstructor<Vue>;
