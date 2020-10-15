import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePostDTO } from './dto/create-post.dto';
import { Post } from './interfaces/post.interface';
@Injectable()
export class BlogService {

    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) { }

    async getPosts(): Promise<any> {
        const posts = await this.postModel.find().exec();
        return posts;
    }

    async getPost(postID): Promise<any> {
        const post = await this.postModel
            .findById(postID)
            .exec();
        return post;
    }

    async addPost(createPostDTO: CreatePostDTO): Promise<any> {
        const newPost = await new this.postModel(createPostDTO);
        return newPost.save();
       return null;
    }

    async editPost(postID, createPostDTO: CreatePostDTO): Promise<any> {
        const editedPost = await this.postModel
            .findByIdAndUpdate(postID, createPostDTO, { new: true });
        return editedPost;
    }

    async deletePost(postID): Promise<any> {
        const deletedPost = await this.postModel
            .findByIdAndRemove(postID);
        return deletedPost;
    }

}
