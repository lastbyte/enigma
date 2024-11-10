import Color from "colorjs.io";
//@ts-ignore
import nearestColor from 'nearest-color';
import colorNameList from 'color-name-list';


export function getComplementaryColor(color: Color): Color[] {
    return [color, color.clone().to("hsl").set('h', (color.h + 180) % 360)];
}

export function getAnalogousColors(color: Color): Color[] {

    const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 30) % 360),
        baseColor.clone().set('h', (baseColor.h + 15) % 360),
        baseColor.clone().set('h', (baseColor.h + 345) % 360),
        baseColor.clone().set('h', (baseColor.h + 330) % 360),
    ];
}

export function getTriadicColors(color: Color): Color[] {
    const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 120) % 360),
        baseColor.clone().set('h', (baseColor.h + 240) % 360),
    ];
}

export function getSplitComplementaryColors(color: Color): Color[] {
    const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 150) % 360),
        baseColor.clone().set('h', (baseColor.h + 210) % 360),
    ];
}

export function getSplitComplementaryCWColors(color: Color): Color[] {
    const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 150) % 360),
        baseColor.clone().set('h', (baseColor.h + 180) % 360),
    ];
}

export function getSplitComplementaryCCWColors(color: Color): Color[] {
    const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 180) % 360),
        baseColor.clone().set('h', (baseColor.h + 210) % 360),
    ];
}

export function getTetradicColors(color: Color): Color[] {

    const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 60) % 360),
        baseColor.clone().set('h', (baseColor.h + 180) % 360),
        baseColor.clone().set('h', (baseColor.h + 240) % 360),
    ];
}

export function getSquareColors(color: Color): Color[] {
    const baseColor = color.clone().to('hsl');

    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 90) % 360),
        baseColor.clone().set('h', (baseColor.h + 180) % 360),
        baseColor.clone().set('h', (baseColor.h + 270) % 360),
    ];
}

export function getMonochromaticColors(color: Color, steps=5): Color[] {
    const baseColor = color.clone().to('hsl');
    return Array.from({ length: steps }, (_, i) =>
        baseColor.clone().set('l', Math.max(0, Math.min(100, baseColor.l - i * 10)))
    );
}

export function getClashColors(color: Color): Color[] {
    const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 90) % 360),
        baseColor.clone().set('h', (baseColor.h + 270) % 360),
    ];
}

export function getFourToneCWColors(color: Color): Color[] {
    const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 60) % 360),
        baseColor.clone().set('h', (baseColor.h + 150) % 360),
        baseColor.clone().set('h', (baseColor.h + 240) % 360),
    ];
}

export function getFourToneCCWColors(color: Color): Color[] {
    const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 300) % 360),
        baseColor.clone().set('h', (baseColor.h + 210) % 360),
        baseColor.clone().set('h', (baseColor.h + 120) % 360),
    ];
}

export function getFiveToneAColors(color: Color): Color[] {
   const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 20) % 360),
        baseColor.clone().set('h', (baseColor.h + 40) % 360),
        baseColor.clone().set('h', (baseColor.h + 80) % 360),
        baseColor.clone().set('h', (baseColor.h + 160) % 360),
    ];
}

export function getFiveToneBColors(color: Color): Color[] {
    const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 10) % 360),
        baseColor.clone().set('h', (baseColor.h + 20) % 360),
        baseColor.clone().set('h', (baseColor.h + 40) % 360),
        baseColor.clone().set('h', (baseColor.h + 80) % 360),
    ];
}

export function getFiveToneCColors(color: Color): Color[] {
    const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 25) % 360),
        baseColor.clone().set('h', (baseColor.h + 50) % 360),
        baseColor.clone().set('h', (baseColor.h + 100) % 360),
        baseColor.clone().set('h', (baseColor.h + 200) % 360),
    ];
}

export function getFiveToneDColors(color: Color): Color[] {
    const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 15) % 360),
        baseColor.clone().set('h', (baseColor.h + 30) % 360),
        baseColor.clone().set('h', (baseColor.h + 60) % 360),
        baseColor.clone().set('h', (baseColor.h + 120) % 360),
    ];
}

export function getFiveToneEColors(color: Color): Color[] {
    const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 12) % 360),
        baseColor.clone().set('h', (baseColor.h + 24) % 360),
        baseColor.clone().set('h', (baseColor.h + 48) % 360),
        baseColor.clone().set('h', (baseColor.h + 96) % 360),
    ];
}

export function getFiveToneFColors(color: Color): Color[] {
    const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 8) % 360),
        baseColor.clone().set('h', (baseColor.h + 16) % 360),
        baseColor.clone().set('h', (baseColor.h + 32) % 360),
        baseColor.clone().set('h', (baseColor.h + 64) % 360),
    ];
}

export function getSixToneCWColors(color: Color): Color[] {
   const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 60) % 360),
        baseColor.clone().set('h', (baseColor.h + 120) % 360),
        baseColor.clone().set('h', (baseColor.h + 180) % 360),
        baseColor.clone().set('h', (baseColor.h + 240) % 360),
        baseColor.clone().set('h', (baseColor.h + 300) % 360),
    ];
}


export function getSixToneCCWColors(color: Color): Color[] {
    const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 300) % 360),
        baseColor.clone().set('h', (baseColor.h + 240) % 360),
        baseColor.clone().set('h', (baseColor.h + 180) % 360),
        baseColor.clone().set('h', (baseColor.h + 120) % 360),
        baseColor.clone().set('h', (baseColor.h + 60) % 360),
    ];
}

export function getSevenToneColors(color: Color): Color[] {
    const baseColor = color.clone().to('hsl');
    return [
        baseColor.clone(),
        baseColor.clone().set('h', (baseColor.h + 51.43) % 360),
        baseColor.clone().set('h', (baseColor.h + 102.86) % 360),
        baseColor.clone().set('h', (baseColor.h + 154.29) % 360),
        baseColor.clone().set('h', (baseColor.h + 205.71) % 360),
        baseColor.clone().set('h', (baseColor.h + 257.14) % 360),
        baseColor.clone().set('h', (baseColor.h + 308.57) % 360),
    ];
}

export function getNeutralColors(color: Color, steps =5): Color[] {
    const baseColor = color.clone().to('hsl');
    return Array.from({ length: steps }, (_, i) =>
        baseColor.clone().set('s', Math.max(0, baseColor.s - i * 20))
    );
}


export function toRGBString(color: Color, percentage = false): string {

    const rp = color.r.toFixed(2)
    const gp = color.g.toFixed(2);
    const bp = color.b.toFixed(2);

    const r = (color.r * 255).toFixed(0)
    const g = (color.g * 255).toFixed(0)
    const b = (color.b * 255).toFixed(0)
    return percentage ? `rgb(${rp}%, ${gp}%, ${bp}%)` : `rgb(${r}, ${g}, ${b})`;
}

export function toRGBAString(color: Color): string {

    const baseColor = color.to('srgb');

    const r = (baseColor.r * 255).toFixed(0)
    const g = (baseColor.g * 255).toFixed(0)
    const b = (baseColor.b * 255).toFixed(0)
    const a = baseColor.alpha.toFixed(2);

    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function toHSLString(color: Color): string {
    const col = color.to('hsl')
    return `hsl(${col.h.toFixed(2)}, ${col.s.toFixed(2)}%, ${col.l.toFixed(2)}%)`;
}

export function toHSLSAtring(color: Color): string {
    const col = color.to('hsl')
    const h = col.h.toFixed(2)
    const s = col.s.toFixed(2)
    const l = col.l.toFixed(2)
    const a = col.alpha ? col.alpha.toFixed(2) : '1';

    return `hsla(${h}, ${s}, ${l}, ${a})`;
}

export function toHSVString(color: Color): string {
    const col = color.to('hsv')
    return `hsv(${col.h.toFixed(2)}, ${col.s.toFixed(2)}, ${col.v.toFixed(2)})`;
}

export function toHSVAString(color: Color): string {
    const col = color.to('hsv')
    const h = col.h.toFixed(2)
    const s = col.s.toFixed(2)
    const v = col.v.toFixed(2)
    const a = col.alpha ? col.alpha.toFixed(2) : '1';

    return `hsva(${h}, ${s}, ${v}, ${a})`;
}

export function toHexString(color: Color, alpha=false): string {
    const rgbCol = color.to('srgb');
    const r = Math.round(rgbCol.r * 255).toString(16).padStart(2, '0');
    const g = Math.round(rgbCol.g * 255).toString(16).padStart(2, '0');
    const b = Math.round(rgbCol.b * 255).toString(16).padStart(2, '0');
    const a = Math.round(rgbCol.alpha * 255).toString(16).padStart(2, '0');
    return `#${r}${g}${b}${alpha ? a : ''}`;
}

export function generateShades(color: Color, steps: number): Color[] {
    const shades: Color[] = [];

    for (let i = 1; i <= steps; i++) {
        const shade = color.clone();
        // Access lightness via the HSL color space and reduce it
        const [h, s, l] = shade.to("hsl").coords;
        shade.set("hsl.lightness", Math.max(0, l - i * (l / steps)));
        shades.push(shade);
    }

    return shades;
}

export function generateTints(color: Color, steps: number): Color[] {
    const baseColor = new Color(color).to('hsl');
    const tints: Color[] = [];

    for (let i = 1; i <= steps; i++) {
        const tint = color.clone();
        // Access lightness via the HSL color space and increase it
        const [h, s, l] = tint.to("hsl").coords;
        tint.set("hsl.lightness", Math.min(100, l + i * ((100 - l) / steps)));
        tints.push(tint);
    }

    return tints;
}

export function generateTones(color: Color, num: number): Color[] {
    const baseColor = color.clone().to('hsl');
    const tones: Color[] = [];

    for (let i = 0; i < num; i++) {
        const saturation = (baseColor.s * (1 - (i / num))).toFixed(2);
        const toneColor = baseColor.clone().set('s', parseFloat(saturation));
        tones.push(toneColor);
    }

    return tones;
}

export function getColorName(color: string): any {
    const colors = colorNameList.reduce((o: any, {name, hex}: {
        name: any,
        hex: any
    }) => Object.assign(o, {[name]: hex}), {});
    const nearest = nearestColor.from(colors);
    try {
        return nearest(color);
    } catch (error) {
        return {name : "-", value : "-"};
    }
}

