export class Vector3 {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    lerp(other: Vector3, t: number) {
        return new Vector3(this.x + (other.x - this.x) * t, this.y + (other.y - this.y) * t, this.z + (other.z - this.z) * t);
    }

    add(other: Vector3): Vector3 {
        return new Vector3(
            this.x + other.x,
            this.y + other.y,
            this.z + other.z
        );
    }

    multiplyScalar(other: number): Vector3 {
        return new Vector3(
            this.x * other,
            this.y * other,
            this.z * other
        );
    }

    multiply(other: Vector3): Vector3 {
        return new Vector3(
            this.x * other.x,
            this.y * other.y,
            this.z * other.z
        );
    }

    dot(other: Vector3): number {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }

    cross(other: Vector3): Vector3 {
        return new Vector3(
            this.y * other.z - this.z * other.y,
            this.z * other.x - this.x * other.z,
            this.x * other.y - this.y * other.x);
    }

    angle(other: Vector3): number {
        return Math.acos(Math.max(Math.min(this.dot(other) / (this.length() * other.length()), 1.0), -1.0));
    }

    rotateAroundNormal(angle: number, normal: Vector3): Vector3 {
        // Should be Rodrigues' rotation formula
        return this.multiplyScalar(Math.cos(angle)).add(normal.cross(this).multiplyScalar(Math.sin(angle))).add(normal.multiplyScalar(normal.dot(this)).multiplyScalar(1.0 - Math.cos(angle)));
    }

    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    // Function which rotates a vector such that it is parallel to another vector
    // https://math.stackexchange.com/questions/180418/calculate-rotation-matrix-to-align-vector-a-to-vector-b-in-3d
    //rotateToParallel(other: Vector3): Vector3 {
    //    const crossProduct = this.cross(other);
    //    const dotProduct = this.dot(other);
    //    const skewSymmetricCrossProductMatrix = new Matrix3(
    //        0.0, -crossProduct.z, crossProduct.y,
    //        crossProduct.z, 0.0, -crossProduct.x,
    //        -crossProduct.y, crossProduct.x, 0.0
    //    );
    //    const rotationMatrix = Matrix3.identity().add(skewSymmetricCrossProductMatrix).add(skewSymmetricCrossProductMatrix.multiply(skewSymmetricCrossProductMatrix).multiplyScalar(1.0 / (1.0 + dotProduct)));
    //    return rotationMatrix.multiplyVector(this);
    //}
}

export class Matrix3 {
    m11: number;
    m12: number;
    m13: number;
    m21: number;
    m22: number;
    m23: number;
    m31: number;
    m32: number;
    m33: number;

    constructor(m11: number, m12: number, m13: number, m21: number, m22: number, m23: number, m31:number, m32: number, m33: number) {
        this.m11 = m11;
        this.m12 = m12;
        this.m13 = m13;
        this.m21 = m21;
        this.m22 = m22;
        this.m23 = m23;
        this.m31 = m31;
        this.m32 = m32;
        this.m33 = m33;
    }

    static identity(): Matrix3 {
        return new Matrix3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0 ,0.0, 1.0
        );
    }

    // Implement matrix multiplication
    multiply(other: Matrix3): Matrix3 {
        return new Matrix3(
            this.m11 * other.m11 + this.m12 * other.m21 + this.m13 * other.m31,
            this.m11 * other.m12 + this.m12 * other.m22 + this.m13 * other.m32,
            this.m11 * other.m13 + this.m12 * other.m23 + this.m13 * other.m33,
            this.m21 * other.m11 + this.m22 * other.m21 + this.m23 * other.m31,
            this.m21 * other.m12 + this.m22 * other.m22 + this.m23 * other.m32,
            this.m21 * other.m13 + this.m22 * other.m23 + this.m23 * other.m33,
            this.m31 * other.m11 + this.m32 * other.m21 + this.m33 * other.m31,
            this.m32 * other.m12 + this.m32 * other.m22 + this.m33 * other.m32,
            this.m33 * other.m13 + this.m33 * other.m23 + this.m33 * other.m33);
    }

    multiplyScalar(other: number): Matrix3 {
        return new Matrix3(
            this.m11 * other,
            this.m12 * other,
            this.m13 * other,
            this.m21 * other,
            this.m22 * other,
            this.m23 * other,
            this.m31 * other,
            this.m32 * other,
            this.m33 * other);
    }

    add(other: Matrix3): Matrix3 {
        return new Matrix3(
            this.m11 + other.m11,
            this.m12 + other.m12,
            this.m13 + other.m13,
            this.m21 + other.m21,
            this.m22 + other.m22,
            this.m23 + other.m23,
            this.m31 + other.m31,
            this.m32 + other.m32,
            this.m33 + other.m33
        );
    }

    multiplyVector(other: Vector3): Vector3 {
        return new Vector3(
            this.m11 * other.x + this.m12 * other.y + this.m13 * other.z,
            this.m21 * other.x + this.m22 * other.y + this.m23 * other.z,
            this.m31 * other.x + this.m32 * other.y + this.m33 * other.z
        );
    }
}