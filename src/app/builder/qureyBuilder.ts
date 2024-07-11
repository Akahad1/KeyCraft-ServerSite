import { FilterQuery, Query } from "mongoose";

class QureyBuilder<T> {
  public modelQurey: Query<T[], T>;
  public qurey: Record<string, unknown>;
  constructor(modelQurey: Query<T[], T>, qurey: Record<string, unknown>) {
    this.modelQurey = modelQurey;
    this.qurey = qurey;
  }

  search(searchAbleFields: string[]) {
    const searchTerm = this?.qurey?.searchTerm;
    if (searchTerm) {
      this.modelQurey = this.modelQurey.find({
        $or: searchAbleFields.map(
          (field) =>
            ({
              [field]: { $regex: searchTerm, $options: "i" },
            } as FilterQuery<T>)
        ),
      });
    }

    return this;
  }

  filter() {
    const qurObj = { ...this.qurey };
    const excludeFields = ["searchTerm", "sort", "limit", "page", "fields"];
    excludeFields.forEach((el) => delete qurObj[el]);
    this.modelQurey = this.modelQurey.find(qurObj as FilterQuery<T>);

    return this;
  }

  sort() {
    let sort =
      (this.qurey?.sort as string)?.split(",")?.join(" ") || "-createdAt";
    this.modelQurey = this.modelQurey.sort(sort as string);
    return this;
  }
}

export default QureyBuilder;
